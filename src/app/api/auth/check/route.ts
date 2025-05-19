import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { getCurrentGMTTime } from '@/lib/utils';

export async function GET(request: NextRequest) {
  try {
    const cookieStore = cookies();
    const sessionId = cookieStore.get('session')?.value;

    if (!sessionId) {
      return NextResponse.json(
        { authenticated: false }, 
        { 
          status: 401,
          headers: {
            'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0',
            'Surrogate-Control': 'no-store'
          }
        }
      );
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
      return NextResponse.json(
        { authenticated: false }, 
        { 
          status: 401,
          headers: {
            'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0',
            'Surrogate-Control': 'no-store'
          }
        }
      );
    }

    // Check if session is expired (18 hours) using GMT time
    const lastLogin = new Date(user.last_login).getTime();
    const now = getCurrentGMTTime().getTime();
    const hoursDiff = (now - lastLogin) / (1000 * 60 * 60);

    if (hoursDiff >= 18) {
      // Session expired
      cookieStore.delete('session');
      return NextResponse.json(
        { authenticated: false }, 
        { 
          status: 401,
          headers: {
            'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0',
            'Surrogate-Control': 'no-store'
          }
        }
      );
    }

    // Revalidate relevant paths
    revalidatePath('/admin');
    revalidatePath('/add-user');

    return NextResponse.json({
      authenticated: true,
      role: user.role,
      email: user.email,
      id: user.id
    }, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store'
      }
    });
  } catch (error) {
    console.error('Auth check error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { 
        status: 500,
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
          'Surrogate-Control': 'no-store'
        }
      }
    );
  }
} 