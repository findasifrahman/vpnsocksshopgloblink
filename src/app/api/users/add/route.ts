import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { name, package_days, passportNo, phnNo, email, password } = await request.json();

    // Validate input
    if (!name || !package_days || !password) {
      return NextResponse.json(
        { message: 'Name, package days, and password are required' },
        { status: 400 }
      );
    }

    // Check password protection
    const passwordProtect = await prisma.password_protect.findFirst({
      where: {
        password,
        expiry_date: {
          gt: new Date(),
        },
      },
    });

    if (!passwordProtect) {
      return NextResponse.json(
        { message: 'Invalid or expired password' },
        { status: 401 }
      );
    }

    // Find available QR code
    const today = new Date();
    const expiryDate = new Date();
    expiryDate.setDate(today.getDate() + parseInt(package_days));

    const availableQRCode = await prisma.shawdowsocks_code.findFirst({
      where: {
        AND: [
          {
            activated_from: {
              lte: today,
            },
          },
          {
            valid_upto: {
              gt: expiryDate,
            },
          },
          {
            code_usage_count: {
              lt: prisma.shawdowsocks_code.fields.code_max_usage,
            },
          },
        ],
      },
      orderBy: {
        created_at: 'asc',
      },
    });

    if (!availableQRCode) {
      return NextResponse.json(
        { message: 'no_subscription_code_available' },
        { status: 404 }
      );
    }

    // Create new user
    const newUser = await prisma.vpn_users.create({
      data: {
        userId: crypto.randomUUID(),
        name,
        package_days: parseInt(package_days),
        passportNo,
        phnNo,
        email,
        vpn_id: availableQRCode.vpn_id,
      },
    });

    // Update QR code usage count
    await prisma.shawdowsocks_code.update({
      where: { vpn_id: availableQRCode.vpn_id },
      data: {
        code_usage_count: {
          increment: 1,
        },
      },
    });

    // Return QR code data
    return NextResponse.json({
      main_link: availableQRCode.main_link,
      alternative_link: availableQRCode.alternative_link,
      mirror1: availableQRCode.mirror1,
      mirror2: availableQRCode.mirror2,
    });
  } catch (error) {
    console.error('Add user error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
} 