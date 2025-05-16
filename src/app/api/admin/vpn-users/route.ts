import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '0');
    const limit = parseInt(searchParams.get('limit') || '10');
    const search = searchParams.get('search') || '';
    const order = searchParams.get('order') || 'desc';
    const orderBy = searchParams.get('orderBy') || 'createdAt';

    // Calculate skip for pagination
    const skip = page * limit;

    // Build search conditions
    const searchConditions = search
      ? {
          OR: [
            { name: { contains: search, mode: Prisma.QueryMode.insensitive } },
            { passportNo: { contains: search, mode: Prisma.QueryMode.insensitive } },
            { phnNo: { contains: search, mode: Prisma.QueryMode.insensitive } },
            { email: { contains: search, mode: Prisma.QueryMode.insensitive } },
          ],
        }
      : {};

    // Get total count for pagination
    const total = await prisma.vpn_users.count({
      where: searchConditions,
    });

    // Get paginated users with sorting
    const users = await prisma.vpn_users.findMany({
      where: searchConditions,
      skip,
      take: limit,
      orderBy: {
        [orderBy]: order,
      },
    });

    return NextResponse.json({
      users,
      total,
    });
  } catch (error) {
    console.error('Error fetching VPN users:', error);
    return NextResponse.json(
      { error: 'Failed to fetch VPN users' },
      { status: 500 }
    );
  }
} 