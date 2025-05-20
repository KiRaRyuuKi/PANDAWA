import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  if (isNaN(id)) {
    return NextResponse.json({ error: 'ID tidak valid' }, { status: 400 });
  }

  try {
    const panen = await prisma.hasilPanen.findUnique({
      where: { id_panen: id },
      include: {
        kecamatan: {
          select: { nama_kecamatan: true },
        },
        komoditas: {
          select: { nama_komoditas: true },
        },
      },
    });

    if (!panen) {
      return NextResponse.json(
        { error: 'Data hasil panen tidak ditemukan' },
        { status: 404 }
      );
    }

    return NextResponse.json(panen);
  } catch (error) {
    console.error('Error saat mengambil data hasil panen:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat mengambil data hasil panen' },
      { status: 500 }
    );
  }
}

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

    // Verifikasi kecamatan dan komoditas ada
    const kecamatan = await prisma.kecamatan.findUnique({
      where: { id_kecamatan },
    });

    if (!kecamatan) {
      return NextResponse.json(
        { error: 'Kecamatan tidak ditemukan' },
        { status: 404 }
      );
    }

    const komoditas = await prisma.komoditas.findUnique({
      where: { id_komoditas },
    });

    if (!komoditas) {
      return NextResponse.json(
        { error: 'Komoditas tidak ditemukan' },
        { status: 404 }
      );
    }

    const updated = await prisma.hasilPanen.update({
      where: { id_panen: id },
      data: {
        id_kecamatan,
        id_komoditas,
        tahun_panen,
        luas_panen,
        produksi,
        produktivitas,
      },
      include: {
        kecamatan: {
          select: { nama_kecamatan: true },
        },
        komoditas: {
          select: { nama_komoditas: true },
        },
      },
    });

    return NextResponse.json({
      message: 'Data hasil panen berhasil diupdate',
      data: updated,
    });
  } catch (error: any) {
    console.error('Error updating hasil panen data:', error);

    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Data hasil panen tidak ditemukan' },
        { status: 404 }
      );
    }

    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'Data dengan kombinasi kecamatan, komoditas, dan tahun ini sudah ada' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: 'Gagal mengupdate data hasil panen' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  if (isNaN(id)) {
    return NextResponse.json({ error: 'ID tidak valid' }, { status: 400 });
  }

  try {
    await prisma.hasilPanen.delete({
      where: { id_panen: id },
    });

    return NextResponse.json({
      message: 'Data hasil panen berhasil dihapus',
    });
  } catch (error: any) {
    console.error('Error deleting hasil panen data:', error);

    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Data hasil panen tidak ditemukan' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: 'Gagal menghapus data hasil panen' },
      { status: 500 }
    );
  }
}