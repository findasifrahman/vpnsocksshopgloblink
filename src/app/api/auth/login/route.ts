import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { getCurrentGMTTime } from '@/lib/utils';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email and password are required' },
        { 
          status: 400,
          headers: {
            'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0',
            'Surrogate-Control': 'no-store'
          }
        }
      );
    }

    // Find user by email
    const user = await prisma.system_users.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
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

    // Compare passwords directly
    const isValidPassword = password === user.password;

    if (!isValidPassword) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
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

    // Update last_login timestamp with GMT time
    await prisma.system_users.update({
      where: { id: user.id },
      data: { last_login: getCurrentGMTTime() },
    });

    // Create session cookie
    const cookieStore = cookies();
    cookieStore.set('session', user.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 18 * 60 * 60, // 18 hours
    });

    // Revalidate relevant paths
    revalidatePath('/admin');
    revalidatePath('/add-user');

    // Return user data (excluding password)
    const { password: _, ...userWithoutPassword } = user;
    return NextResponse.json(userWithoutPassword, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store'
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
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