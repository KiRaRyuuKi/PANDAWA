import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  if (isNaN(id)) {
    return NextResponse.json({ error: 'ID tidak valid' }, { status: 400 });
  }

  try {
    const {
      id_kecamatan,
      id_komoditas,
      tahun_panen,
      luas_panen,
      produksi,
      produktivitas,
    } = await req.json();

    if (
      id_kecamatan == null ||
      id_komoditas == null ||
      tahun_panen == null ||
      luas_panen == null ||
      produksi == null ||
      produktivitas == null
    ) {
      return NextResponse.json(
        { error: 'Data tidak lengkap' },
        { status: 400 }
      );
    }

    const updated = await prisma.hasil_panen.update({
      where: { id_panen: id },
      data: {
        id_kecamatan,
        id_komoditas,
        tahun_panen,
        luas_panen,
        produksi,
        produktivitas,
      },
    });

    return NextResponse.json({
      message: 'Data hasil panen berhasil diupdate',
      updated,
    });
  } catch (error: any) {
    console.error('Error updating hasil panen data:', error);

    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Data hasil panen tidak ditemukan' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: 'Gagal mengupdate data hasil panen' },
      { status: 500 }
    );
  }
}
