import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const [rows] = await db.query(`
      SELECT 
        prediksi_panen.id_prediksi,
        prediksi_panen.id_kecamatan,
        prediksi_panen.id_komoditas,
        prediksi_panen.tahun,
        prediksi_panen.luas_panen,
        prediksi_panen.rata_rata_produksi,
        prediksi_panen.hasil_prediksi,
        data_kecamatan.nama_kecamatan,
        komoditas.nama_komoditas
      FROM 
        prediksi_panen
      JOIN 
        data_kecamatan ON prediksi_panen.id_kecamatan = data_kecamatan.id_kecamatan
      JOIN 
        komoditas ON prediksi_panen.id_komoditas = komoditas.id_komoditas
    `);

    return NextResponse.json(rows as any[]);
  } catch (error) {
    console.error('Error saat mengambil data prediksi panen:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat mengambil data' },
      { status: 500 }
    );
  }
}
