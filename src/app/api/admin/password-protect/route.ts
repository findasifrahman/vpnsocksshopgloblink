import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getCurrentGMTTime } from '@/lib/utils';

// GET /api/admin/password-protect
export async function GET() {
  try {
    const passwords = await prisma.password_protect.findMany({
      select: {
        id: true,
        password: true,
        expiry_date: true,
      },
      orderBy: {
        expiry_date: 'desc'
      }
    });
    return NextResponse.json(passwords, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store'
      }
    });
  } catch (error) {
    console.error('Error fetching passwords:', error);
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

    // Create password with UTC timestamp
    const passwordProtect = await prisma.password_protect.create({
      data: {
        password,
        expiry_date: new Date(expiry_date), // Store in UTC
      },
    });

    return NextResponse.json(passwordProtect, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store'
      }
    });
  } catch (error) {
    console.error('Error creating password:', error);
    return NextResponse.json(
      { message: 'Failed to create password' },
      { status: 500 }
    );
  }
} 