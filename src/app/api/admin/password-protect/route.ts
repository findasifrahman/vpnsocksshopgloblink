import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET /api/admin/password-protect
export async function GET() {
  try {
    const passwords = await prisma.password_protect.findMany({
      select: {
        id: true,
        password: true,
        expiry_date: true,
      },
    });
    return NextResponse.json(passwords);
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to fetch passwords' },
      { status: 500 }
    );
  }
}

// POST /api/admin/password-protect
export async function POST(request: Request) {
  try {
    const { password, expiry_date } = await request.json();

    // Validate input
    if (!password || !expiry_date) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create password
    const passwordProtect = await prisma.password_protect.create({
      data: {
        password,
        expiry_date: new Date(expiry_date),
      },
    });

    return NextResponse.json(passwordProtect);
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to create password' },
      { status: 500 }
    );
  }
} 