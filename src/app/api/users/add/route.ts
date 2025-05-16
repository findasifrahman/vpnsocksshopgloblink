import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      package_days,
      passportNo,
      phnNo,
      email,
      paid_amount,
      password,
    } = body;

    // Verify protection password from database
    const passwordProtect = await prisma.password_protect.findFirst({
      where: {
        password: password,
        expiry_date: {
          gt: new Date(),
        },
      },
    });

    if (!passwordProtect) {
      return NextResponse.json(
        { error: 'Invalid or expired password' },
        { status: 401 }
      );
    }

    // Get current date
    const currentDate = new Date();
    const packageEndDate = new Date();
    packageEndDate.setDate(packageEndDate.getDate() + parseInt(package_days));

    // Find available package with earliest activated_from date
    const availablePackage = await prisma.$queryRaw`
      SELECT * FROM shawdowsocks_code 
      WHERE activated_from <= ${currentDate}
      AND valid_upto > ${packageEndDate}
      AND code_usage_count < code_max_usage
      ORDER BY activated_from ASC
      LIMIT 1
    `;

    if (!availablePackage || !Array.isArray(availablePackage) || availablePackage.length === 0) {
      return NextResponse.json(
        { message: 'no_qr_code' },
        { status: 404 }
      );
    }

    const selectedPackage = availablePackage[0];

    // Create VPN user
    const vpnUser = await prisma.vpn_users.create({
      data: {
        name,
        package_days: parseInt(package_days),
        passportNo,
        phnNo,
        email,
        paid_amount: parseFloat(paid_amount),
        vpn_id: selectedPackage.vpn_id,
      },
    });

    // Update package usage count
    await prisma.shawdowsocks_code.update({
      where: { vpn_id: selectedPackage.vpn_id },
      data: {
        code_usage_count: {
          increment: 1,
        },
      },
    });

    return NextResponse.json({
      main_link: selectedPackage.main_link,
      alternative_link: selectedPackage.alternative_link,
      mirror1: selectedPackage.mirror1,
      mirror2: selectedPackage.mirror2,
    });
  } catch (error) {
    console.error('Error adding VPN user:', error);
    return NextResponse.json(
      { error: 'Failed to add VPN user' },
      { status: 500 }
    );
  }
} 