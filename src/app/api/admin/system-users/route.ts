import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/admin/system-users
export async function GET() {
  try {
    const users = await prisma.system_users.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
        role: true,
        last_login: true,
      },
      orderBy: {
        name: 'asc',
      },
    });
    return NextResponse.json(users);
  } catch (error) {
    console.error('Error fetching system users:', error);
    return NextResponse.json(
      { error: 'Failed to fetch system users' },
      { status: 500 }
    );
  }
}

// POST /api/admin/system-users
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password, role } = body;

    // Validate required fields
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingUser = await prisma.system_users.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'Email already exists' },
        { status: 400 }
      );
    }

    // Create user with plain text password (no hashing)
    const user = await prisma.system_users.create({
      data: {
        name,
        email,
        password, // Store as plain text
        role: role || 'admin',
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error('Error creating system user:', error);
    return NextResponse.json(
      { error: 'Failed to create system user' },
      { status: 500 }
    );
  }
} 