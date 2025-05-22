import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getCurrentGMTTime } from '@/lib/utils';

// Force dynamic responses and prevent edge caching
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';
export const runtime = 'nodejs';

interface VpnUser {
  paid_amount: number;
}

export async function GET() {
  try {
    const now = getCurrentGMTTime();
    
    // Calculate start of today, yesterday, and month in GMT
    const startOfToday = new Date(now);
    startOfToday.setHours(0, 0, 0, 0);
    
    const startOfYesterday = new Date(startOfToday);
    startOfYesterday.setDate(startOfYesterday.getDate() - 1);
    
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    // Get data for today
    const todayData = await prisma.vpn_users.findMany({
      where: {
        createdAt: {
          gte: startOfToday,
          lte: now
        }
      }
    });

    // Get data for yesterday
    const yesterdayData = await prisma.vpn_users.findMany({
      where: {
        createdAt: {
          gte: startOfYesterday,
          lt: startOfToday
        }
      }
    });

    // Get data for this month
    const monthData = await prisma.vpn_users.findMany({
      where: {
        createdAt: {
          gte: startOfMonth,
          lte: now
        }
      }
    });

    // Calculate totals
    const todayUsers = todayData.length;
    const yesterdayUsers = yesterdayData.length;
    const thisMonthUsers = monthData.length;

    const todayAmount = todayData.reduce((sum, user) => sum + user.paid_amount, 0);
    const yesterdayAmount = yesterdayData.reduce((sum, user) => sum + user.paid_amount, 0);
    const thisMonthAmount = monthData.reduce((sum, user) => sum + user.paid_amount, 0);

    return NextResponse.json({
      todayUsers,
      yesterdayUsers,
      thisMonthUsers,
      todayAmount,
      yesterdayAmount,
      thisMonthAmount
    }, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store',
        'CDN-Cache-Control': 'no-cache',
        'Vercel-CDN-Cache-Control': 'no-cache'
      }
    });
  } catch (error) {
    console.error('Error fetching summary:', error);
    return NextResponse.json(
      { error: 'Failed to fetch summary' },
      { status: 500 }
    );
  }
} 