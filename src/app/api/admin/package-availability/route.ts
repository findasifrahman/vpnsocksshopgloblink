import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getCurrentGMTTime } from '@/lib/utils';

// package availibity 6 hours added to match UTC+6 in vercel deployment

export async function GET() {
  try {
    const now = getCurrentGMTTime();
    // Add 6 hours to match UTC+6
    now.setHours(now.getHours() + 6);
    
    const endOfToday = new Date(now);
    endOfToday.setHours(23, 59, 59, 999);

    console.log('Current GMT+6 time:', now);
    console.log('End of today GMT+6:', endOfToday);

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
              lt: now // Use GMT+6 time
            }
          },
          {
            valid_upto: {
              gt: endOfToday // Use GMT+6 time
            }
          },
          {
            OR: [
              {
                AND: [
                  {
                    code_usage_count: {
                      lt: prisma.shawdowsocks_code.fields.code_max_usage
                    }
                  },
                  {
                    code_max_usage: {
                      gt: 0
                    }
                  }
                ]
              },
              {
                code_max_usage: 0 // Allow unlimited usage
              }
            ]
          }
        ]
      },
      orderBy: {
        activated_from: 'asc'
      }
    });

    //console.log('Available packages:', availablePackages);

    // Calculate available packages for each duration
    let fifteenDayPackages = 0;
    let twentyDayPackages = 0;
    let thirtyDayPackages = 0;

    for (const pkg of availablePackages) {
      // For unlimited usage packages, count as 1 available
      const availableUses = pkg.code_max_usage === 0 ? 1 : pkg.code_max_usage - pkg.code_usage_count;
      
      // Calculate days until expiry using GMT+6 times
      const daysUntilExpiry = Math.ceil((pkg.valid_upto.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

      console.log(`Package ${pkg.vpn_id}:`, {
        availableUses,
        daysUntilExpiry,
        valid_upto: pkg.valid_upto,
        current_time: now,
        code_usage_count: pkg.code_usage_count,
        code_max_usage: pkg.code_max_usage,
        activated_from: pkg.activated_from
      });

      // Only count packages that have available uses
      if (availableUses > 0) {
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
    }

    console.log('Package counts:', {
      fifteenDayPackages,
      twentyDayPackages,
      thirtyDayPackages
    });

    return NextResponse.json({
      fifteenDayPackages,
      twentyDayPackages,
      thirtyDayPackages
    }, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store'
      }
    });
  } catch (error) {
    console.error('Error fetching package availability:', error);
    return NextResponse.json(
      { error: 'Failed to fetch package availability' },
      { status: 500 }
    );
  }
} 