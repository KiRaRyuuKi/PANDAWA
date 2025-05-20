import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { auth } from '@/api/auth/auth';

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  if (isNaN(id)) {
    return NextResponse.json({ error: 'ID tidak valid' }, { status: 400 });
  }

  try {
    // Verify authentication
    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

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
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  if (isNaN(id)) {
    return NextResponse.json({ error: 'ID tidak valid' }, { status: 400 });
  }

  try {
    // Verify authentication
    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

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

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  if (isNaN(id)) {
    return NextResponse.json({ error: 'ID tidak valid' }, { status: 400 });
  }

  try {
    // Verify authentication
    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await prisma.kecamatan.delete({
      where: { id_kecamatan: id },
    });

    return NextResponse.json({
      message: 'Kecamatan berhasil dihapus',
    });
  } catch (error: any) {
    console.error('Error deleting kecamatan:', error);

    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Kecamatan tidak ditemukan' },
        { status: 404 }
      );
    }

    if (error.code === 'P2003') {
      return NextResponse.json(
        { error: 'Kecamatan tidak dapat dihapus karena masih digunakan oleh data lain' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Gagal menghapus kecamatan' },
      { status: 500 }
    );
  }
}