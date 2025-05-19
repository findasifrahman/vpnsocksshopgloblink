import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';
import { getCurrentGMTTime, convertToUTC } from '@/lib/utils';

// GET /api/admin/system-users
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '0');
    const limit = parseInt(searchParams.get('limit') || '10');
    const search = searchParams.get('search') || '';
    const order = searchParams.get('order') || 'desc';
    const orderBy = searchParams.get('orderBy') || 'last_login';
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    const shopName = searchParams.get('shopName');

    // Calculate date range using GMT time
    const now = getCurrentGMTTime();
    const twoMonthsAgo = new Date(now);
    twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 2);

    // Build date conditions
    const dateConditions = {
      last_login: {
        gte: startDate ? convertToUTC(new Date(startDate)) : twoMonthsAgo,
        lte: endDate ? convertToUTC(new Date(endDate)) : now
      }
    };

    // Build shop conditions
    const shopConditions = shopName ? {
      shop_name: shopName
    } : {};

    // Build search conditions
    const searchConditions: any = {
      AND: [
        shopConditions,
        search ? {
          OR: [
            { email: { contains: search, mode: Prisma.QueryMode.insensitive } },
            { name: { contains: search, mode: Prisma.QueryMode.insensitive } }
          ]
        } : {}
      ]
    };

    // Add date conditions only if dates are provided
    if (startDate || endDate) {
      searchConditions.AND.push(dateConditions);
    }

    // Get total count for pagination
    const total = await prisma.system_users.count({
      where: searchConditions
    });

    // Get paginated users with sorting
    const users = await prisma.system_users.findMany({
      where: searchConditions,
      skip: page * limit,
      take: limit,
      orderBy: {
        [orderBy]: order,
      },
      include: {
        shop: {
          select: {
            shopname: true
          }
        }
      }
    });

    return NextResponse.json({
      users,
      total
    });
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
    const { name, email, password, role, shop_name } = body;

    // Validate required fields
    if (!name || !email || !password || !shop_name) {
      return NextResponse.json(
        { error: 'All fields are required' },
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

    // Check if shop exists
    const shop = await prisma.shop_name.findUnique({
      where: { id: shop_name }
    });

    if (!shop) {
      return NextResponse.json(
        { error: 'Invalid shop selected' },
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
        shop_name
      }
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