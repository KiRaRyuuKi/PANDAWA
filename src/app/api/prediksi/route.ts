import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const prediksiPanen = await prisma.prediksiPanen.findMany({
      include: {
        kecamatan: {
          select: {
            nama_kecamatan: true,
          },
        },
        komoditas: {
          select: {
            nama_komoditas: true,
          },
        },
      },
    });
    return NextResponse.json(prediksiPanen);
  } catch (error) {
    console.error('Error saat mengambil data prediksi panen:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat mengambil data prediksi panen' },
      { status: 500 }
    );
  }
}