import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const panens = await prisma.hasil_panen.findMany({
      include: {
        data_kecamatan: {
          select: { nama_kecamatan: true },
        },
        komoditas: {
          select: { nama_komoditas: true },
        },
      },
    });
    return NextResponse.json(panens);
  } catch (error) {
    console.error('Error saat mengambil data hasil panen:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat mengambil data hasil panen' },
      { status: 500 }
    );
  }
}
