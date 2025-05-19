import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getCurrentGMTTime } from '@/lib/utils';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request: NextRequest) {
  try {
    const now = getCurrentGMTTime();
    
    // Set start of today to 00:00:00 GMT+6
    const startOfToday = new Date(now);
    startOfToday.setHours(0, 0, 0, 0);
    
    // Set end of today to 23:59:59 GMT+6
    const endOfToday = new Date(now);
    endOfToday.setHours(23, 59, 59, 999);
    
    // Set start of yesterday to 00:00:00 GMT+6
    const startOfYesterday = new Date(startOfToday);
    startOfYesterday.setDate(startOfYesterday.getDate() - 1);
    
    // Set end of yesterday to 23:59:59 GMT+6
    const endOfYesterday = new Date(startOfToday);
    endOfYesterday.setMilliseconds(-1);
    
    // Set start of month to 1st day of current month 00:00:00 GMT+6
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    startOfMonth.setHours(0, 0, 0, 0);

    console.log('Time ranges:', {
      now: now.toISOString(),
      startOfToday: startOfToday.toISOString(),
      endOfToday: endOfToday.toISOString(),
      startOfYesterday: startOfYesterday.toISOString(),
      endOfYesterday: endOfYesterday.toISOString(),
      startOfMonth: startOfMonth.toISOString()
    });

    // Get all shops
    const shops = await prisma.shop_name.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });

    console.log('Found shops:', shops);

    // Get stats for each shop
    const shopStats = await Promise.all(shops.map(async (shop) => {
      // Today's stats
      const todayStats = await prisma.vpn_users.aggregate({
        where: {
          admin: {
            shop_name: shop.id
          },
          createdAt: {
            gte: startOfToday,
            lte: endOfToday
          }
        },
        _count: true,
        _sum: {
          paid_amount: true
        }
      });

      // Yesterday's stats
      const yesterdayStats = await prisma.vpn_users.aggregate({
        where: {
          admin: {
            shop_name: shop.id
          },
          createdAt: {
            gte: startOfYesterday,
            lt: startOfToday
          }
        },
        _count: true,
        _sum: {
          paid_amount: true
        }
      });

      // This month's stats
      const monthStats = await prisma.vpn_users.aggregate({
        where: {
          admin: {
            shop_name: shop.id
          },
          createdAt: {
            gte: startOfMonth,
            lte: now
          }
        },
        _count: true,
        _sum: {
          paid_amount: true
        }
      });

      console.log(`Stats for shop ${shop.shopname}:`, {
        today: {
          count: todayStats._count,
          amount: todayStats._sum?.paid_amount,
          range: {
            start: startOfToday.toISOString(),
            end: endOfToday.toISOString()
          }
        },
        yesterday: {
          count: yesterdayStats._count,
          amount: yesterdayStats._sum?.paid_amount,
          range: {
            start: startOfYesterday.toISOString(),
            end: endOfYesterday.toISOString()
          }
        },
        month: {
          count: monthStats._count,
          amount: monthStats._sum?.paid_amount,
          range: {
            start: startOfMonth.toISOString(),
            end: now.toISOString()
          }
        }
      });

      return {
        shopName: shop.shopname,
        today: {
          count: todayStats._count || 0,
          amount: todayStats._sum?.paid_amount || 0
        },
        yesterday: {
          count: yesterdayStats._count || 0,
          amount: yesterdayStats._sum?.paid_amount || 0
        },
        thisMonth: {
          count: monthStats._count || 0,
          amount: monthStats._sum?.paid_amount || 0
        }
      };
    }));

    return NextResponse.json(shopStats, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store'
      }
    });
  } catch (error) {
    console.error('Error fetching shop stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch shop stats' },
      { status: 500 }
    );
  }
} 