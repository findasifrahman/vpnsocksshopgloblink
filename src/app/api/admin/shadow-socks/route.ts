import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { convertToUTC } from '@/lib/utils';

// Helper function to convert BigInt to string
const convertBigIntToString = (data: any): any => {
  if (data === null || data === undefined) return data;
  if (typeof data === 'bigint') return data.toString();
  if (Array.isArray(data)) return data.map(convertBigIntToString);
  if (typeof data === 'object') {
    const result: Record<string, any> = {};
    for (const key in data) {
      if (data[key] instanceof Date) {
        result[key] = data[key].toISOString();
      } else {
        result[key] = convertBigIntToString(data[key]);
      }
    }
    return result;
  }
  return data;
};

// GET /api/admin/shadow-socks
export async function GET() {
  try {
    const codes = await prisma.shawdowsocks_code.findMany({
      orderBy: {
        created_at: 'desc',
      },
    });
    return NextResponse.json(convertBigIntToString(codes), {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store'
      }
    });
  } catch (error) {
    console.error('Error fetching ShadowSocks codes:', error);
    return NextResponse.json(
      { error: 'Failed to fetch ShadowSocks codes' },
      { status: 500 }
    );
  }
}

// POST /api/admin/shadow-socks
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      main_link,
      alternative_link,
      mirror1,
      mirror2,
      code_max_usage,
      total_data,
      valid_upto,
      activated_from,
    } = body;

    // Validate required fields
    if (!main_link || !code_max_usage || !total_data || !valid_upto) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create code with UTC timestamps
    const code = await prisma.shawdowsocks_code.create({
      data: {
        main_link,
        alternative_link,
        mirror1,
        mirror2,
        code_usage_count: 0,
        code_max_usage: parseInt(code_max_usage),
        total_data: BigInt(total_data),
        valid_upto: convertToUTC(valid_upto), // Store in UTC
        data_left: BigInt(total_data),
        activated_from: activated_from ? convertToUTC(activated_from) : null, // Store in UTC
        created_at: new Date(), // This will be stored in UTC by default
      },
    });

    return NextResponse.json(convertBigIntToString(code), {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store'
      }
    });
  } catch (error) {
    console.error('Error creating ShadowSocks code:', error);
    return NextResponse.json(
      { error: 'Failed to create ShadowSocks code' },
      { status: 500 }
    );
  }
} 