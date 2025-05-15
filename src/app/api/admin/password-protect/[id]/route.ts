import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// DELETE /api/admin/password-protect/[id]
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    // Check if password exists
    const password = await prisma.password_protect.findUnique({
      where: { id },
    });

    if (!password) {
      return NextResponse.json(
        { message: 'Password not found' },
        { status: 404 }
      );
    }

    // Delete password
    await prisma.password_protect.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Password deleted successfully' });
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to delete password' },
      { status: 500 }
    );
  }
} 