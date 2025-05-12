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
    const { nama_kecamatan, deskripsi, area } = await req.json();

    if (!nama_kecamatan || !deskripsi || !area) {
      return NextResponse.json(
        { error: 'Semua field harus diisi' },
        { status: 400 }
      );
    }

    const updated = await prisma.data_kecamatan.update({
      where: { id_kecamatan: id },
      data: {
        nama_kecamatan,
        deskripsi,
        area,
      },
    });

    return NextResponse.json({
      message: 'Kecamatan berhasil diupdate',
      updated,
    });
  } catch (error: any) {
    console.error('Error updating kecamatan:', error);

    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Kecamatan tidak ditemukan' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: 'Gagal mengupdate kecamatan' },
      { status: 500 }
    );
  }
}
