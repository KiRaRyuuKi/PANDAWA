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
    const { laju_pertumbuhan, jml_penduduk, tahun } = await req.json();

    if (
      laju_pertumbuhan == null ||
      jml_penduduk == null ||
      tahun == null
    ) {
      return NextResponse.json(
        { error: 'Data tidak lengkap' },
        { status: 400 }
      );
    }

    const updated = await prisma.data_penduduk.update({
      where: { id_penduduk: id },
      data: {
        laju_pertumbuhan,
        jml_penduduk,
        tahun,
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
