import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const panens = await prisma.hasilPanen.findMany({
      include: {
        kecamatan: {
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

export async function POST(req: Request) {
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

    const newPanen = await prisma.hasilPanen.create({
      data: {
        tahun_panen: Number(tahun_panen),
        luas_panen: Number(luas_panen),
        produksi: Number(produksi),
        produktivitas: Number(produktivitas),
        nama_panen: `${kecamatan.nama_kecamatan} - ${komoditas.nama_komoditas}`,
        kecamatan: {
          connect: { id_kecamatan: Number(id_kecamatan) }
        },
        komoditas: {
          connect: { id_komoditas: Number(id_komoditas) }
        }
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
      message: 'Data hasil panen berhasil ditambahkan',
      data: newPanen,
    }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating hasil panen data:', error);

    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'Data hasil panen untuk kombinasi kecamatan, komoditas, dan tahun ini sudah ada' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: 'Gagal menambahkan data hasil panen' },
      { status: 500 }
    );
  }
}