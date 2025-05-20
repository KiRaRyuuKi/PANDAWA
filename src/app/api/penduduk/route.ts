import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const penduduks = await prisma.penduduk.findMany({
      include: {
        kecamatan: {
          select: {
            nama_kecamatan: true,
          },
        },
      },
    });
    return NextResponse.json(penduduks);
  } catch (error) {
    console.error('Error saat mengambil data penduduk:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat mengambil data penduduk' },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const { id_kecamatan, jumlah_penduduk, laju_pertumbuhan, data_tahun } = await req.json();

    // Validasi input
    if (!id_kecamatan || jumlah_penduduk === undefined || !laju_pertumbuhan || !data_tahun) {
      return NextResponse.json(
        { error: 'Semua field harus diisi' },
        { status: 400 }
      );
    }

    const newPenduduk = await prisma.penduduk.create({
      data: {
        id_kecamatan,
        jumlah_penduduk,
        laju_pertumbuhan,
        data_tahun
      }
    });

    return NextResponse.json({
      message: 'Data penduduk berhasil ditambahkan',
      penduduk: newPenduduk
    }, { status: 201 });
  } catch (error) {
    console.error('Error saat menambahkan data penduduk:', error);
    return NextResponse.json(
      { error: 'Gagal menambahkan data penduduk' },
      { status: 500 }
    );
  }
}