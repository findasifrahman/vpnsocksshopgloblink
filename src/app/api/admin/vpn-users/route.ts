import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';
import { getCurrentGMTTime, convertToUTC } from '@/lib/utils';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '0');
    const limit = parseInt(searchParams.get('limit') || '10');
    const search = searchParams.get('search') || '';
    const order = searchParams.get('order') || 'desc';
    const orderBy = searchParams.get('orderBy') || 'createdAt';
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    const shopName = searchParams.get('shopName');

    // Calculate date range using GMT time
    const now = getCurrentGMTTime();
    const twoMonthsAgo = new Date(now);
    twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 2);

    // Build date conditions
    const dateConditions = {
      createdAt: {
        gte: startDate ? convertToUTC(new Date(startDate)) : twoMonthsAgo,
        lte: endDate ? convertToUTC(new Date(endDate)) : now
      }
    };

    // Build shop conditions
    const shopConditions = shopName ? {
      admin: {
        shop_name: shopName
      }
    } : {};

    // Build search conditions
    const searchConditions = {
      AND: [
        dateConditions,
        shopConditions,
        search ? {
          OR: [
            { name: { contains: search, mode: Prisma.QueryMode.insensitive } },
            { email: { contains: search, mode: Prisma.QueryMode.insensitive } },
            { passportNo: { contains: search, mode: Prisma.QueryMode.insensitive } },
            { phnNo: { contains: search, mode: Prisma.QueryMode.insensitive } }
          ]
        } : {}
      ]
    };

    // Get total count for pagination
    const total = await prisma.vpn_users.count({
      where: searchConditions
    });

    // Get paginated users with sorting
    const users = await prisma.vpn_users.findMany({
      where: searchConditions,
      skip: page * limit,
      take: limit,
      orderBy: {
        [orderBy]: order,
      },
      include: {
        admin: {
          select: {
            name: true,
            shop: {
              select: {
                shopname: true
              }
            }
          }
        }
      }
    });

    return NextResponse.json({
      users,
      total
    }, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store'
      }
    });
  } catch (error) {
    console.error('Error fetching VPN users:', error);
    return NextResponse.json(
      { error: 'Failed to fetch VPN users' },
      { status: 500 }
    );
  }
} 