import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: idParam } = await params;
  const id = Number(idParam);

  if (isNaN(id)) {
    return NextResponse.json({ error: 'ID tidak valid' }, { status: 400 });
  }

  try {
    const penduduk = await prisma.penduduk.findUnique({
      where: { id_penduduk: id },
      include: {
        kecamatan: true
      }
    });

    if (!penduduk) {
      return NextResponse.json(
        { error: 'Data penduduk tidak ditemukan' },
        { status: 404 }
      );
    }

    return NextResponse.json(penduduk);
  } catch (error) {
    console.error('Error saat mengambil data penduduk:', error);
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
    const { jumlah_penduduk, laju_pertumbuhan, data_tahun } = await req.json();

    if (
      jumlah_penduduk === undefined ||
      !laju_pertumbuhan ||
      !data_tahun
    ) {
      return NextResponse.json(
        { error: 'Data tidak lengkap' },
        { status: 400 }
      );
    }

    const updated = await prisma.penduduk.update({
      where: { id_penduduk: id },
      data: {
        jumlah_penduduk,
        laju_pertumbuhan,
        data_tahun,
      },
    });

    return NextResponse.json({
      message: 'Data penduduk berhasil diupdate',
      updated,
    });
  } catch (error: any) {
    console.error('Error updating penduduk data:', error);

    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Data penduduk tidak ditemukan' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: 'Gagal mengupdate data penduduk' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: idParam } = await params;
  const id = Number(idParam);

  if (isNaN(id)) {
    return NextResponse.json({ error: 'ID tidak valid' }, { status: 400 });
  }

  try {
    await prisma.penduduk.delete({
      where: { id_penduduk: id }
    });

    return NextResponse.json({
      message: 'Data penduduk berhasil dihapus'
    });
  } catch (error: any) {
    console.error('Error deleting penduduk data:', error);

    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Data penduduk tidak ditemukan' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: 'Gagal menghapus data penduduk' },
      { status: 500 }
    );
  }
}