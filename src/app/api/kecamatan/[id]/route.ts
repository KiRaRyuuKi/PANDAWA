import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: idParam } = await params;
  const id = Number(idParam);

  if (isNaN(id)) {
    return NextResponse.json({ error: 'ID tidak valid' }, { status: 400 });
  }

  try {
    const kecamatan = await prisma.kecamatan.findUnique({
      where: { id_kecamatan: id },
      include: {
        komoditas: {
          select: {
            nama_komoditas: true,
          },
        },
      },
    });

    if (!kecamatan) {
      return NextResponse.json(
        { error: 'Kecamatan tidak ditemukan' },
        { status: 404 }
      );
    }

    return NextResponse.json(kecamatan);
  } catch (error) {
    console.error('Error saat mengambil data kecamatan:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat mengambil data' },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: idParam } = await params;
  const id = Number(idParam);

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

    const updated = await prisma.kecamatan.update({
      where: { id_kecamatan: id },
      data: {
        nama_kecamatan,
        deskripsi,
        area,
      },
    });

    return NextResponse.json({
      message: 'Kecamatan berhasil diupdate',
      data: updated,
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