import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { cookies } from 'next/headers';

export async function GET(request: NextRequest) {
  try {
    const cookieStore = cookies();
    const sessionId = cookieStore.get('session')?.value;

    if (!sessionId) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    const user = await prisma.system_users.findUnique({
      where: { id: sessionId },
      select: {
        id: true,
        email: true,
        role: true,
        last_login: true
      },
    });

    if (!user || !user.last_login) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    // Check if session is expired (18 hours)
    const lastLogin = new Date(user.last_login).getTime();
    const now = new Date().getTime();
    const hoursDiff = (now - lastLogin) / (1000 * 60 * 60);

    if (hoursDiff >= 18) {
      // Session expired
      cookieStore.delete('session');
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    return NextResponse.json({
      authenticated: true,
      role: user.role,
      email: user.email,
      id: user.id
    });
  } catch (error) {
    console.error('Auth check error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 