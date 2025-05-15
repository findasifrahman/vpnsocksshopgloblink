import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get('session');

    if (!session) {
      return NextResponse.json(
        { message: 'Not authenticated' },
        { status: 401 }
      );
    }

    // Find user by session ID
    const user = await prisma.system_users.findUnique({
      where: { id: session.value },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        last_login: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        { message: 'Invalid session' },
        { status: 401 }
      );
    }

    return NextResponse.json({
      authenticated: true,
      role: user.role,
      user,
    });
  } catch (error) {
    console.error('Auth check error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
} 