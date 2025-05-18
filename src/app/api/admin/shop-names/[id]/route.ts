import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

// DELETE /api/admin/shop-names/[id]
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    // Check if shop exists
    const shop = await prisma.shop_name.findUnique({
      where: { id }
    });

    if (!shop) {
      return NextResponse.json(
        { error: 'Shop not found' },
        { status: 404 }
      );
    }

    // Check if shop is being used by any system users
    const usersWithShop = await prisma.system_users.findFirst({
      where: { shop_name: id }
    });

    if (usersWithShop) {
      return NextResponse.json(
        { error: 'Cannot delete shop that is assigned to users' },
        { status: 400 }
      );
    }

    // Delete the shop
    await prisma.shop_name.delete({
      where: { id }
    });

    // Revalidate the shop names page
    revalidatePath('/admin/shop-names');

    return NextResponse.json(
      { message: 'Shop deleted successfully' },
      {
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
          'Surrogate-Control': 'no-store'
        }
      }
    );
  } catch (error) {
    console.error('Error deleting shop:', error);
    return NextResponse.json(
      { error: 'Failed to delete shop' },
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