import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    // Get all shops
    const shops = await prisma.shop_name.findMany({
      include: {
        system_users: {
          include: {
            vpn_users: true
          }
        }
      }
    });

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    const shopStats = shops.map(shop => {
      const allUsers = shop.system_users.flatMap(user => user.vpn_users);
      
      const todayUsers = allUsers.filter(user => 
        user.createdAt >= today
      );
      
      const yesterdayUsers = allUsers.filter(user => 
        user.createdAt >= yesterday && user.createdAt < today
      );
      
      const thisMonthUsers = allUsers.filter(user => 
        user.createdAt >= firstDayOfMonth
      );

      return {
        shopName: shop.shopname,
        today: {
          count: todayUsers.length,
          amount: todayUsers.reduce((sum, user) => sum + user.paid_amount, 0)
        },
        yesterday: {
          count: yesterdayUsers.length,
          amount: yesterdayUsers.reduce((sum, user) => sum + user.paid_amount, 0)
        },
        thisMonth: {
          count: thisMonthUsers.length,
          amount: thisMonthUsers.reduce((sum, user) => sum + user.paid_amount, 0)
        }
      };
    });

    return NextResponse.json(shopStats);
  } catch (error) {
    console.error('Error fetching shop statistics:', error);
    return NextResponse.json(
      { error: 'Failed to fetch shop statistics' },
      { status: 500 }
    );
  }
} 