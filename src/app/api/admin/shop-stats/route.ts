import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getCurrentGMTTime } from '@/lib/utils';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request: NextRequest) {
  try {
    const now = getCurrentGMTTime();
    const startOfToday = new Date(now);
    startOfToday.setHours(0, 0, 0, 0);
    
    const startOfYesterday = new Date(startOfToday);
    startOfYesterday.setDate(startOfYesterday.getDate() - 1);
    
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

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
            lte: now
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
        today: todayStats,
        yesterday: yesterdayStats,
        month: monthStats
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