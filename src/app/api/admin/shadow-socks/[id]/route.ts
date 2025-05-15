import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// DELETE /api/admin/shadow-socks/[id]
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    // Check if the code exists
    const existingCode = await prisma.shawdowsocks_code.findUnique({
      where: { vpn_id: id },
    });

    if (!existingCode) {
      return NextResponse.json(
        { error: 'ShadowSocks code not found' },
        { status: 404 }
      );
    }

    // Delete the code
    await prisma.shawdowsocks_code.delete({
      where: { vpn_id: id },
    });

    return NextResponse.json({ message: 'ShadowSocks code deleted successfully' });
  } catch (error) {
    console.error('Error deleting ShadowSocks code:', error);
    return NextResponse.json(
      { error: 'Failed to delete ShadowSocks code' },
      { status: 500 }
    );
  }
} 