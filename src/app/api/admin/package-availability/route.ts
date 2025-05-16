import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

interface PackageAvailability {
  fifteenDayPackages: number;
  twentyDayPackages: number;
  thirtyDayPackages: number;
}

export async function GET() {
  try {
    const now = new Date();
    const fifteenDaysFromNow = new Date(now.getTime() + 15 * 24 * 60 * 60 * 1000);
    const twentyDaysFromNow = new Date(now.getTime() + 20 * 24 * 60 * 60 * 1000);
    const thirtyDaysFromNow = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);

    // Get all available codes
    const availableCodes = await prisma.shawdowsocks_code.findMany({
      where: {
        AND: [
          {
            OR: [
              { activated_from: null },
              { activated_from: { lt: now } }
            ]
          },
          { code_usage_count: { lt: prisma.shawdowsocks_code.fields.code_max_usage } }
        ]
      },
      select: {
        code_max_usage: true,
        code_usage_count: true,
        valid_upto: true
      }
    });

    // Calculate available packages
    let fifteenDayPackages = 0;
    let twentyDayPackages = 0;
    let thirtyDayPackages = 0;

    availableCodes.forEach(code => {
      const remainingUsage = code.code_max_usage - code.code_usage_count;
      const validUntil = new Date(code.valid_upto);
      
      // Calculate days remaining
      const daysRemaining = Math.ceil((validUntil.getTime() - now.getTime()) / (24 * 60 * 60 * 1000));

      // Add to appropriate package counts based on remaining days
      if (daysRemaining >= 30) {
        thirtyDayPackages += remainingUsage;
        twentyDayPackages += remainingUsage;
        fifteenDayPackages += remainingUsage;
      } else if (daysRemaining >= 20) {
        twentyDayPackages += remainingUsage;
        fifteenDayPackages += remainingUsage;
      } else if (daysRemaining >= 15) {
        fifteenDayPackages += remainingUsage;
      }
    });

    return NextResponse.json({
      fifteenDayPackages,
      twentyDayPackages,
      thirtyDayPackages
    });
  } catch (error) {
    console.error('Error fetching package availability:', error);
    return NextResponse.json(
      { error: 'Failed to fetch package availability' },
      { status: 500 }
    );
  }
} 