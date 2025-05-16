import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function DELETE(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  try {
    const { userId } = params;

    // Delete the user
    await prisma.vpn_users.delete({
      where: {
        userId,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting VPN user:', error);
    return NextResponse.json(
      { error: 'Failed to delete VPN user' },
      { status: 500 }
    );
  }
} 