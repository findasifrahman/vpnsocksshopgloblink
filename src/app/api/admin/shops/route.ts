import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';
import { getCurrentGMTTime, convertToUTC } from '@/lib/utils';
import { revalidatePath } from 'next/cache';

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

    // Build search conditions
    const searchConditions = {
      AND: [
        dateConditions,
        search ? {
          OR: [
            { shopname: { contains: search, mode: Prisma.QueryMode.insensitive } }
          ]
        } : {}
      ]
    };

    // Get total count for pagination
    const total = await prisma.shop_name.count({
      where: searchConditions
    });

    // Get paginated shops with sorting
    const shops = await prisma.shop_name.findMany({
      where: searchConditions,
      skip: page * limit,
      take: limit,
      orderBy: {
        [orderBy]: order,
      }
    });

    // Revalidate the shop names page
    revalidatePath('/admin/shop-names');
    revalidatePath('/admin');

    return NextResponse.json({
      shops,
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
    console.error('Error fetching shops:', error);
    return NextResponse.json(
      { error: 'Failed to fetch shops' },
      { status: 500 }
    );
  }
} 