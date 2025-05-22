import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const kecamatans = await prisma.kecamatan.findMany({
      include: {
        komoditas: {
          select: {
            nama_komoditas: true,
          },
        },
      },
    });
    return NextResponse.json(kecamatans);
  } catch (error) {
    console.error('Error saat mengambil data kecamatan:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat mengambil data' },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const {
      id_komoditas,
      nama_kecamatan,
      deskripsi,
      gambar,
      area,
      posisi_x,
      posisi_y
    } = await req.json();

    // Validasi input
    if (!id_komoditas || !nama_kecamatan || !deskripsi || !gambar || !area || posisi_x === undefined || posisi_y === undefined) {
      return NextResponse.json(
        { error: 'Semua field harus diisi' },
        { status: 400 }
      );
    }

    const newKecamatan = await prisma.kecamatan.create({
      data: {
        id_komoditas,
        nama_kecamatan,
        deskripsi,
        gambar,
        area,
      }
    });

    return NextResponse.json({
      message: 'Kecamatan berhasil ditambahkan',
      kecamatan: newKecamatan
    }, { status: 201 });
  } catch (error) {
    console.error('Error saat menambahkan kecamatan:', error);
    return NextResponse.json(
      { error: 'Gagal menambahkan kecamatan' },
      { status: 500 }
    );
  }
}