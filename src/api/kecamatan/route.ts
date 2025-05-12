import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const kecamatans = await prisma.data_kecamatan.findMany({
      include: {
        komoditas: {
          select: {
            nama_komoditas: true,
          },
        },
      },
    });
    return NextResponse.json(kecamatans);
  } catch (error) {
    console.error('Error saat mengambil data kecamatan:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat mengambil data' },
      { status: 500 }
    );
  }
}
