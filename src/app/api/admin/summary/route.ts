import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

interface VpnUser {
  paid_amount: number;
}

export async function GET() {
  try {
    const now = new Date();
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const startOfYesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    // Get today's data
    const todayData = await prisma.vpn_users.findMany({
      where: {
        createdAt: {
          gte: startOfToday,
        },
      },
      select: {
        paid_amount: true,
      },
    });

    // Get yesterday's data
    const yesterdayData = await prisma.vpn_users.findMany({
      where: {
        createdAt: {
          gte: startOfYesterday,
          lt: startOfToday,
        },
      },
      select: {
        paid_amount: true,
      },
    });

    // Get this month's data
    const thisMonthData = await prisma.vpn_users.findMany({
      where: {
        createdAt: {
          gte: startOfMonth,
        },
      },
      select: {
        paid_amount: true,
      },
    });

    // Calculate totals
    const todayUsers = todayData.length;
    const yesterdayUsers = yesterdayData.length;
    const thisMonthUsers = thisMonthData.length;

    const todayAmount = todayData.reduce((sum: number, user: VpnUser) => sum + user.paid_amount, 0);
    const yesterdayAmount = yesterdayData.reduce((sum: number, user: VpnUser) => sum + user.paid_amount, 0);
    const thisMonthAmount = thisMonthData.reduce((sum: number, user: VpnUser) => sum + user.paid_amount, 0);

    return NextResponse.json({
      todayUsers,
      yesterdayUsers,
      thisMonthUsers,
      todayAmount,
      yesterdayAmount,
      thisMonthAmount,
    });
  } catch (error) {
    console.error('Error fetching summary data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch summary data' },
      { status: 500 }
    );
  }
} 