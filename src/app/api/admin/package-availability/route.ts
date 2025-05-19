import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getCurrentGMTTime } from '@/lib/utils';

export async function GET() {
  try {
    const now = getCurrentGMTTime();
    const endOfToday = new Date(now);
    endOfToday.setHours(23, 59, 59, 999);

    // Get all available packages that meet the criteria:
    // a) activated_from < current datetime
    // b) valid_upto > today + package_days
    // c) code_usage_count < code_max_usage
    // d) pick oldest activated_from
    const availablePackages = await prisma.shawdowsocks_code.findMany({
      where: {
        AND: [
          {
            activated_from: {
              lt: now
            }
          },
          {
            valid_upto: {
              gt: endOfToday
            }
          },
          {
            code_usage_count: {
              lt: prisma.shawdowsocks_code.fields.code_max_usage
            }
          }
        ]
      },
      orderBy: {
        activated_from: 'asc'
      }
    });

    // Calculate available packages for each duration
    let fifteenDayPackages = 0;
    let twentyDayPackages = 0;
    let thirtyDayPackages = 0;

    for (const pkg of availablePackages) {
      const availableUses = pkg.code_max_usage - pkg.code_usage_count;
      const daysUntilExpiry = Math.ceil((pkg.valid_upto.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

      if (daysUntilExpiry >= 30) {
        thirtyDayPackages += availableUses;
      }
      if (daysUntilExpiry >= 20) {
        twentyDayPackages += availableUses;
      }
      if (daysUntilExpiry >= 15) {
        fifteenDayPackages += availableUses;
      }
    }

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