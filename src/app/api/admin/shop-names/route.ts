import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

// GET /api/admin/shop-names
export async function GET() {
  try {
    const shops = await prisma.shop_name.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });

    // Revalidate the shop names page
    revalidatePath('/admin/shop-names');
    revalidatePath('/admin');

    return NextResponse.json(shops, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store'
      }
    });
  } catch (error) {
    console.error('Error fetching shop names:', error);
    return NextResponse.json(
      { error: 'Failed to fetch shop names' },
      { 
        status: 500,
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
          'Surrogate-Control': 'no-store'
        }
      }
    );
  }
}

// POST /api/admin/shop-names
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { shopname } = body;

    if (!shopname) {
      return NextResponse.json(
        { error: 'Shop name is required' },
        { status: 400 }
      );
    }

    // Check if shop name already exists
    const existingShop = await prisma.shop_name.findUnique({
      where: { shopname }
    });

    if (existingShop) {
      return NextResponse.json(
        { error: 'Shop name already exists' },
        { status: 400 }
      );
    }

    const shop = await prisma.shop_name.create({
      data: {
        shopname
      }
    });

    // Revalidate the shop names page
    revalidatePath('/admin/shop-names');

    return NextResponse.json(shop, {
      status: 201,
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store'
      }
    });
  } catch (error) {
    console.error('Error creating shop name:', error);
    return NextResponse.json(
      { error: 'Failed to create shop name' },
      { 
        status: 500,
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
          'Surrogate-Control': 'no-store'
        }
      }
    );
  }
} 