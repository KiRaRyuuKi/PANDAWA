import { PrismaClient } from './generated/prisma/client';
import { hash } from 'bcrypt-ts';

const prisma = new PrismaClient();

async function main() {
    console.log('⭐ : Starting seeding process...');

    // Clear existing data
    await clearDatabase();

    // Create User data
    await seedUsers();

    // Create Komoditas data
    await seedKomoditas();

    // Create Kecamatan data
    await seedKecamatan();

    // Create Penduduk data
    await seedPenduduk();

    // Create HasilPanen data
    await seedHasilPanen();

    // Create PrediksiPanen data
    await seedPrediksiPanen();

    console.log('😀 : Seeding completed successfully!!!');
}

async function clearDatabase() {
    console.log('♻️ : Clearing existing data...');

    // Delete in correct order to respect foreign key constraints
    await prisma.prediksiPanen.deleteMany({});
    await prisma.hasilPanen.deleteMany({});
    await prisma.penduduk.deleteMany({});
    await prisma.kecamatan.deleteMany({});
    await prisma.komoditas.deleteMany({});
    await prisma.verificationToken.deleteMany({});
    await prisma.session.deleteMany({});
    await prisma.account.deleteMany({});
    await prisma.detail.deleteMany({});
    await prisma.user.deleteMany({});

    console.log('🟢 : Database cleared');
}

async function seedUsers() {
    console.log('👤 : Seeding users...');

    const adminEmail = 'admin@example.com';
    const adminPassword = await hash('supersecretpassword', 10);

    const admin = await prisma.user.create({
        data: {
            first_name: 'Admin',
            last_name: 'PANDAWA',
            email: adminEmail,
            password: adminPassword,
            email_verified: new Date(),
            detail: {
                create: {
                    phone: '+081234590357',
                    bio: 'Administrator for PANDAWA Application System',
                    city: 'Bondowoso',
                    country: 'Indonesia',
                    post_kode: '68271'
                }
            }
        }
    });

    console.log(`🟢 : Created users`);
}

async function seedKomoditas() {
    console.log('🌽 : Seeding komoditas...');

    const komoditasData = [
        { nama_komoditas: 'Padi' },
        { nama_komoditas: 'Jagung' },
        { nama_komoditas: 'Ubi Kayu' },
        { nama_komoditas: 'Kopi' },
        { nama_komoditas: 'Tebu' },
        { nama_komoditas: 'Tembakau' },
        { nama_komoditas: 'Kelapa' }
    ];

    for (const data of komoditasData) {
        await prisma.komoditas.create({
            data
        });
    }

    console.log(`🟢 : Created ${komoditasData.length} komoditas`);
}

async function seedKecamatan() {
    console.log('🏛️ : Seeding kecamatan...');

    // Get all komoditas for reference
    const komoditas = await prisma.komoditas.findMany();

    const kecamatanData = [
        {
            id_komoditas: komoditas[0].id_komoditas,
            nama_kecamatan: 'Binakal',
            deskripsi: 'Binakal adalah sebuah kecamatan di Kabupaten Bondowoso, Provinsi Jawa Timur, Indonesia. Kecamatan ini berjarak sekitar 7 Km dari ibu kota Kabupaten Bondowoso ke arah barat. Pusat pemerintahannya berada di Desa Binakal.',
            gambar: '/kecamatan/binakal.jpg',
            area: 39.039,
        },
        {
            id_komoditas: komoditas[0].id_komoditas,
            nama_kecamatan: 'Bondowoso',
            deskripsi: 'Bondowoso adalah ibu kota Kabupaten Bondowoso yang sekaligus menjadi pusat pemerintahan dan perekonomian dari Kabupaten Bondowoso. Bondowoso juga merupakan sebuah kecamatan yang berada di Kabupaten Bondowoso, Provinsi Jawa Timur, Indonesia.',
            gambar: '/kecamatan/bondowoso.jpg',
            area: 23.158,
        },
        {
            id_komoditas: komoditas[4].id_komoditas,
            nama_kecamatan: 'Cermee',
            deskripsi: 'Cermee adalah sebuah kecamatan di Kabupaten Bondowoso, Provinsi Jawa Timur, Indonesia. Kecamatan ini berjarak 33 Km dari ibu kota Kabupaten Bondowoso dan merupakan salah satu wilayah kecamatan paling timur. Ibu kotanya berada di Desa Cermee.',
            gambar: '/kecamatan/cermee.jpg',
            area: 129.204,
        },
        {
            id_komoditas: komoditas[4].id_komoditas,
            nama_kecamatan: 'Botolinggo',
            deskripsi: 'Botolinggo adalah sebuah desa di Kecamatan Botolinggo, Kabupaten Bondowoso, Provinsi Jawa Timur.',
            gambar: '/kecamatan/botolinggo.jpg',
            area: 127.41,
        },
        {
            id_komoditas: komoditas[0].id_komoditas,
            nama_kecamatan: 'Curahdami',
            deskripsi: 'Curahdami adalah sebuah kecamatan di Kabupaten Bondowoso, Provinsi Jawa Timur, Indonesia. Kecamatan ini berjarak sekitar 3 Km dari ibu kota Kabupaten Bondowoso ke arah barat. Pusat pemerintahannya berada di Kelurahan Curahdami.',
            gambar: '/kecamatan/curahdami.jpg',
            area: 34.889,
        },
        {
            id_komoditas: komoditas[0].id_komoditas,
            nama_kecamatan: 'Grujugan',
            deskripsi: 'Grujugan adalah sebuah kecamatan di Kabupaten Bondowoso, Provinsi Jawa Timur, Indonesia. Kecamatan ini berjarak sekitar 7 Km dari ibu kota Kabupaten Bondowoso ke arah barat daya. Pusat pemerintahannya berada di Desa Taman.',
            gambar: '/kecamatan/grujugan.jpg',
            area: 74.447,
        },
        {
            id_komoditas: komoditas[0].id_komoditas,
            nama_kecamatan: 'Jambe Sari Darus Sholah',
            deskripsi: 'Jambesari Darus Sholah adalah sebuah kecamatan yang berada di Kabupaten Bondowoso, Provinsi Jawa Timur, Indonesia. Kecamatan ini berjarak sekitar 10 Km dari ibu kota Kabupaten Bondowoso ke arah selatan. Pusat pemerintahannya berada di Desa Jambesari.',
            gambar: '/kecamatan/jambesari.jpg',
            area: 36.776,
        },
        {
            id_komoditas: komoditas[0].id_komoditas,
            nama_kecamatan: 'Klabang',
            deskripsi: 'Klabang adalah sebuah kecamatan di Kabupaten Bondowoso, Provinsi Jawa Timur, Indonesia. Kecamatan ini berjarak sekitar 19 Km dari ibu kota Kabupaten Bondowoso ke arah timur laut. Pusat pemerintahannya berada di Desa Klabang.',
            gambar: '/kecamatan/klabang.jpg',
            area: 91.204,
        },
        {
            id_komoditas: komoditas[4].id_komoditas,
            nama_kecamatan: 'Maesan',
            deskripsi: 'Maesan merupakan sebuah kecamatan di Kabupaten Bondowoso, Provinsi Jawa Timur, Indonesia. Kecamatan ini berjarak sekitar 13 Km dari ibu kota Kabupaten Bondowoso ke arah selatan. Pusat pemerintahannya berada di Desa Maesan.',
            gambar: '/kecamatan/maesan.jpg',
            area: 56.083,
        },
        {
            id_komoditas: komoditas[0].id_komoditas,
            nama_kecamatan: 'Pakem',
            deskripsi: 'Pakem adalah sebuah kecamatan di Kabupaten Bondowoso, Jawa Timur, Indonesia. Kecamatan ini berjarak sekitar 18 Km dari ibu kota Kabupaten Bondowoso ke arah barat. Pusat pemerintahannya berada di desa Patemon. Pakem merupakan kecamatan paling barat di Kabupaten Bondowoso.',
            gambar: '/kecamatan/pakem.webp',
            area: 62.082,
        },
        {
            id_komoditas: komoditas[4].id_komoditas,
            nama_kecamatan: 'Prajekan',
            deskripsi: 'Prajekan adalah sebuah kecamatan di Kabupaten Bondowoso, Provinsi Jawa Timur, Indonesia. Kecamatan ini berjarak sekitar 24 Km dari ibu kota Kabupaten Bondowoso ke arah timur laut. Pusat pemerintahannya berada di Desa Prajekan Lor.',
            gambar: '/kecamatan/prajekan.jpg',
            area: 56.642,
        },
        {
            id_komoditas: komoditas[0].id_komoditas,
            nama_kecamatan: 'Pujer',
            deskripsi: 'Pujer adalah sebuah kecamatan di Kabupaten Bondowoso, Provinsi Jawa Timur, Indonesia. Kecamatan ini berjarak sekitar 12 Km dari ibu kota Kabupaten Bondowoso ke arah tenggara. Pusat pemerintahannya berada di Desa Kejayan.',
            gambar: '/kecamatan/pujer.jpg',
            area: 39.889,
        },
        {
            id_komoditas: komoditas[3].id_komoditas,
            nama_kecamatan: 'Ijen',
            deskripsi: 'Ijen adalah sebuah kecamatan di Kabupaten Bondowoso, Provinsi Jawa Timur, Indonesia. Kecamatan ini berjarak sekira 53 Km dari ibu kota Kabupaten Bondowoso melalui Tapen dan Sukosari, dan merupakan kecamatan paling timur. Kecamatan Ijen adalah perubahan nama dari Kecamatan Sempol.',
            gambar: '/kecamatan/ijen.jpg',
            area: 207.20,
        },
        {
            id_komoditas: komoditas[4].id_komoditas,
            nama_kecamatan: 'Sukosari',
            deskripsi: 'Sukosari adalah sebuah kecamatan di Kabupaten Bondowoso, Provinsi Jawa Timur, Indonesia. Kecamatan ini berjarak sekitar 22 Km dari ibu kota Kabupaten Bondowoso ke arah timur. Pusat pemerintahannya berada di Desa Sukosari Lor.',
            gambar: '/kecamatan/sukosari.jpg',
            area: 23.172,
        },
        {
            id_komoditas: komoditas[4].id_komoditas,
            nama_kecamatan: 'Sumber Wringin',
            deskripsi: 'Sumberwringin adalah sebuah kecamatan di Kabupaten Bondowoso, Provinsi Jawa Timur, Indonesia. Kecamatan ini berjarak sekitar 27 Km dari ibu kota Kabupaten Bondowoso ke arah tenggara. Pusat pemerintahannya berada di Desa Sumberwringin. Sumberwringin terletak di lereng Pegunungan Ijen.',
            gambar: '/kecamatan/sumberwringin.jpg',
            area: 137.947,
        },
        {
            id_komoditas: komoditas[0].id_komoditas,
            nama_kecamatan: 'Tamanan',
            deskripsi: 'Tamanan adalah sebuah kecamatan di Kabupaten Bondowoso, Provinsi Jawa Timur, Indonesia. Kata Tamanan sendiri berawal dari sebuah kisah kuno yang konon diambil dari sebuah Taman yang ada di desa tersebut. Taman tersebut merupakan sebuah peninggalan Belanda yang pada akhir Tahun 1998 masih bisa dipakai.',
            gambar: '/kecamatan/tamanan.jpg',
            area: 28.151,
        },
        {
            id_komoditas: komoditas[4].id_komoditas,
            nama_kecamatan: 'Tapen',
            deskripsi: 'Tapen adalah sebuah kecamatan di Kabupaten Bondowoso, Provinsi Jawa Timur, Indonesia. Kecamatan ini berjarak sekitar 16 Km dari ibu kota Kabupaten Bondowoso ke arah timur. Pusat pemerintahannya berada di Desa Tapen.',
            gambar: '/kecamatan/tapen.jpg',
            area: 157.042,
        },
        {
            id_komoditas: komoditas[0].id_komoditas,
            nama_kecamatan: 'Tegalampel',
            deskripsi: 'Tegalampel adalah sebuah kecamatan di Kabupaten Bondowoso, Provinsi Jawa Timur, Indonesia. Kecamatan ini hanya berjarak sekitar 2 Km dari ibu kota Kabupaten Bondowoso ke arah utara. Pusat pemerintahannya berada di Desa Sekarputih.',
            gambar: '/kecamatan/tegalampel.jpg',
            area: 47.027,
        },
        {
            id_komoditas: komoditas[0].id_komoditas,
            nama_kecamatan: 'Tenggarang',
            deskripsi: 'Tenggarang adalah sebuah kecamatan di Kabupaten Bondowoso, Provinsi Jawa Timur, Indonesia.',
            gambar: '/kecamatan/tenggarang.jpg',
            area: 25.795,
        },
        {
            id_komoditas: komoditas[4].id_komoditas,
            nama_kecamatan: 'Tlogosari',
            deskripsi: 'Tlogosari adalah sebuah kecamatan di Kabupaten Bondowoso, Provinsi Jawa Timur, Indonesia. Kecamatan ini berjarak sekitar 17 Km dari ibu kota Kabupaten Bondowoso ke arah tenggara. Pusat pemerintahannya berada di Desa Pakisan. Wilayah bagian selatan kecamatan Tlogosari terdapat Gunung Raung.',
            gambar: '/kecamatan/tlogosari.jpg',
            area: 110.92,
        },
        {
            id_komoditas: komoditas[4].id_komoditas,
            nama_kecamatan: 'Wonosari',
            deskripsi: 'Wonosari adalah sebuah kecamatan di Kabupaten Bondowoso, Provinsi Jawa Timur, Indonesia. Kecamatan ini berjarak sekitar 10 Km dari ibu kota Kabupaten Bondowoso ke arah timur. Pusat pemerintahannya berada di Desa Wonosari.',
            gambar: '/kecamatan/wonosari.jpg',
            area: 42.277,
        },
        {
            id_komoditas: komoditas[2].id_komoditas,
            nama_kecamatan: 'Wringin',
            deskripsi: 'Wringin adalah sebuah kecamatan di Kabupaten Bondowoso, Provinsi Jawa Timur, Indonesia. Kecamatan ini berjarak sekitar 16 Km dari ibu kota Kabupaten Bondowoso ke arah barat laut. Pusat pemerintahannya berada di Desa Wringin.',
            gambar: '/kecamatan/wringin.jpg',
            area: 58.01,
        },
        {
            id_komoditas: komoditas[4].id_komoditas,
            nama_kecamatan: 'Taman Krocok',
            deskripsi: 'Taman Krocok adalah sebuah kecamatan di Kabupaten Bondowoso, Provinsi Jawa Timur, Indonesia. Kecamatan ini berjarak sekitar 12 Km dari ibu kota Kabupaten Bondowoso ke arah timur laut. Pusat pemerintahannya berada di Desa Taman. Kecamatan ini memiliki jumlah penduduk terkecil di kabupaten Bondowoso.',
            gambar: '/kecamatan/tamanKrocok.jpg',
            area: 53.003,
        }
    ];

    for (const data of kecamatanData) {
        await prisma.kecamatan.create({
            data
        });
    }

    console.log(`🟢 : Created ${kecamatanData.length} kecamatan`);
}

async function seedPenduduk() {
    console.log('🎗️ : Seeding penduduk...');

    // Get all kecamatan for reference
    const kecamatan = await prisma.kecamatan.findMany();

    const pendudukData = [
        {
            id_kecamatan: kecamatan[0].id_kecamatan,
            data_tahun: 2025,
            jumlah_penduduk: 17.066,
            laju_pertumbuhan: '-2,12%'
        }, 
        {
            id_kecamatan: kecamatan[1].id_kecamatan,
            data_tahun: 2025,
            jumlah_penduduk: 76.805,
            laju_pertumbuhan: '-1,22%'
        },
        {
            id_kecamatan: kecamatan[2].id_kecamatan,
            data_tahun: 2025,
            jumlah_penduduk: 46.353,
            laju_pertumbuhan: '-1,49%'
        },
        {
            id_kecamatan: kecamatan[3].id_kecamatan,
            data_tahun: 2025,
            jumlah_penduduk: 29.110,
            laju_pertumbuhan: '-2,19%'
        },
        {
            id_kecamatan: kecamatan[4].id_kecamatan,
            data_tahun: 2025,
            jumlah_penduduk: 34.889,
            laju_pertumbuhan: '-0,73%'
        },
        {
            id_kecamatan: kecamatan[5].id_kecamatan,
            data_tahun: 2025,
            jumlah_penduduk: 38.165,
            laju_pertumbuhan: '-0,28%'
        },
        {
            id_kecamatan: kecamatan[6].id_kecamatan,
            data_tahun: 2025,
            jumlah_penduduk: 12.030,
            laju_pertumbuhan: '-2,01%'
        },
        {
            id_kecamatan: kecamatan[7].id_kecamatan,
            data_tahun: 2025,
            jumlah_penduduk: 36.076,
            laju_pertumbuhan: '-2,10%'
        },
        {
            id_kecamatan: kecamatan[8].id_kecamatan,
            data_tahun: 2025,
            jumlah_penduduk: 18.688,
            laju_pertumbuhan: '-1,26%'
        },
        {
            id_kecamatan: kecamatan[9].id_kecamatan,
            data_tahun: 2025,
            jumlah_penduduk: 42.212,
            laju_pertumbuhan: '-0,20%'
        },
        {
            id_kecamatan: kecamatan[10].id_kecamatan,
            data_tahun: 2025,
            jumlah_penduduk: 23.362,
            laju_pertumbuhan: '-2,19%'
        },
        {
            id_kecamatan: kecamatan[11].id_kecamatan,
            data_tahun: 2025,
            jumlah_penduduk: 25.644,
            laju_pertumbuhan: '-1,07%'
        },
        {
            id_kecamatan: kecamatan[12].id_kecamatan,
            data_tahun: 2025,
            jumlah_penduduk: 40.594,
            laju_pertumbuhan: '-1,63%'
        },
        {
            id_kecamatan: kecamatan[13].id_kecamatan,
            data_tahun: 2025,
            jumlah_penduduk: 15.553,
            laju_pertumbuhan: '-0,73%'
        },
        {
            id_kecamatan: kecamatan[14].id_kecamatan,
            data_tahun: 2025,
            jumlah_penduduk: 35.127,
            laju_pertumbuhan: '-1,39'
        },
        {
            id_kecamatan: kecamatan[15].id_kecamatan,
            data_tahun: 2025,
            jumlah_penduduk: 39.535,
            laju_pertumbuhan: '0,31'
        },
        {
            id_kecamatan: kecamatan[16].id_kecamatan,
            data_tahun: 2025,
            jumlah_penduduk: 34.003,
            laju_pertumbuhan: '-1,32%'
        },
        {
            id_kecamatan: kecamatan[17].id_kecamatan,
            data_tahun: 2025,
            jumlah_penduduk: 26.571,
            laju_pertumbuhan: '-0,81%'
        },
        {
            id_kecamatan: kecamatan[18].id_kecamatan,
            data_tahun: 2025,
            jumlah_penduduk: 43.973,
            laju_pertumbuhan: '-0,76%'
        },
        {
            id_kecamatan: kecamatan[19].id_kecamatan,
            data_tahun: 2025,
            jumlah_penduduk: 47.078,
            laju_pertumbuhan: '-0,80'
        },
        {
            id_kecamatan: kecamatan[20].id_kecamatan,
            data_tahun: 2025,
            jumlah_penduduk: 40.764,
            laju_pertumbuhan: '-1,28'
        },
        {
            id_kecamatan: kecamatan[21].id_kecamatan,
            data_tahun: 2025,
            jumlah_penduduk: 40.755,
            laju_pertumbuhan: '-1,04%'
        },
        {
            id_kecamatan: kecamatan[22].id_kecamatan,
            data_tahun: 2025,
            jumlah_penduduk: 46.353,
            laju_pertumbuhan: '-1,49%'
        }
    ];

    for (const data of pendudukData) {
        await prisma.penduduk.create({
            data
        });
    }

    console.log(`🟢 : Created ${pendudukData.length} penduduk records`);
}

async function seedHasilPanen() {
    console.log('🌾 : Seeding hasil panen...');

    // Get all kecamatan and komoditas for reference
    const kecamatan = await prisma.kecamatan.findMany();
    const komoditas = await prisma.komoditas.findMany();

    const hasilPanenData = [
        {
            id_kecamatan: kecamatan[0].id_kecamatan,
            id_komoditas: komoditas[1].id_komoditas,
            nama_panen: `${kecamatan[0].nama_kecamatan} - ${komoditas[1].nama_komoditas}`,
            tahun_panen: 2025,
            produksi: 2.610,
            luas_panen: 5.173,
            produktivitas: 5.05
        },
        {
            id_kecamatan: kecamatan[1].id_kecamatan,
            id_komoditas: komoditas[1].id_komoditas,
            nama_panen: `${kecamatan[1].nama_kecamatan} - ${komoditas[1].nama_komoditas}`,
            tahun_panen: 2025,
            produksi: 561,
            luas_panen: 100,
            produktivitas: 5.61
        },
        {
            id_kecamatan: kecamatan[2].id_kecamatan,
            id_komoditas: komoditas[1].id_komoditas,
            nama_panen: `${kecamatan[2].nama_kecamatan} - ${komoditas[1].nama_komoditas}`,
            tahun_panen: 2025,
            produksi: 14.317,
            luas_panen: 2.598,
            produktivitas: 5.51
        },
        {
            id_kecamatan: kecamatan[3].id_kecamatan,
            id_komoditas: komoditas[1].id_komoditas,
            nama_panen: `${kecamatan[3].nama_kecamatan} - ${komoditas[1].nama_komoditas}`,
            tahun_panen: 2025,
            produksi: 41.389,
            luas_panen: 7.368,
            produktivitas: 5.62
        },
        {
            id_kecamatan: kecamatan[4].id_kecamatan,
            id_komoditas: komoditas[1].id_komoditas,
            nama_panen: `${kecamatan[4].nama_kecamatan} - ${komoditas[1].nama_komoditas}`,
            tahun_panen: 2025,
            produksi: 3.120,
            luas_panen: 619,
            produktivitas: 5.04
        },
        {
            id_kecamatan: kecamatan[5].id_kecamatan,
            id_komoditas: komoditas[1].id_komoditas,
            nama_panen: `${kecamatan[5].nama_kecamatan} - ${komoditas[1].nama_komoditas}`,
            tahun_panen: 2025,
            produksi: 2.211,
            luas_panen: 407,
            produktivitas: 5.43
        },
        {
            id_kecamatan: kecamatan[6].id_kecamatan,
            id_komoditas: komoditas[1].id_komoditas,
            nama_panen: `${kecamatan[6].nama_kecamatan} - ${komoditas[1].nama_komoditas}`,
            tahun_panen: 2025,
            produksi: 1.731,
            luas_panen: 322,
            produktivitas: 5.38
        },
        {
            id_kecamatan: kecamatan[7].id_kecamatan,
            id_komoditas: komoditas[1].id_komoditas,
            nama_panen: `${kecamatan[7].nama_kecamatan} - ${komoditas[1].nama_komoditas}`,
            tahun_panen: 2025,
            produksi: 13.023,
            luas_panen: 2.386,
            produktivitas: 5.46
        },
        {
            id_kecamatan: kecamatan[8].id_kecamatan,
            id_komoditas: komoditas[1].id_komoditas,
            nama_panen: `${kecamatan[8].nama_kecamatan} - ${komoditas[1].nama_komoditas}`,
            tahun_panen: 2025,
            produksi: 8.409,
            luas_panen: 1.557,
            produktivitas: 5.4
        },
        {
            id_kecamatan: kecamatan[9].id_kecamatan,
            id_komoditas: komoditas[1].id_komoditas,
            nama_panen: `${kecamatan[9].nama_kecamatan} - ${komoditas[1].nama_komoditas}`,
            tahun_panen: 2025,
            produksi: 4.804,
            luas_panen: 1.031,
            produktivitas: 4.66
        },
        {
            id_kecamatan: kecamatan[10].id_kecamatan,
            id_komoditas: komoditas[1].id_komoditas,
            nama_panen: `${kecamatan[10].nama_kecamatan} - ${komoditas[1].nama_komoditas}`,
            tahun_panen: 2025,
            produksi: 14.317,
            luas_panen: 2.598,
            produktivitas: 5.51
        },
        {
            id_kecamatan: kecamatan[11].id_kecamatan,
            id_komoditas: komoditas[1].id_komoditas,
            nama_panen: `${kecamatan[11].nama_kecamatan} - ${komoditas[1].nama_komoditas}`,
            tahun_panen: 2025,
            produksi: 5.390,
            luas_panen: 966,
            produktivitas: 5.58
        },
        {
            id_kecamatan: kecamatan[12].id_kecamatan,
            id_komoditas: komoditas[1].id_komoditas,
            nama_panen: `${kecamatan[12].nama_kecamatan} - ${komoditas[1].nama_komoditas}`,
            tahun_panen: 2025,
            produksi: 4.563,
            luas_panen: 836,
            produktivitas: 5.46
        },
        {
            id_kecamatan: kecamatan[13].id_kecamatan,
            id_komoditas: komoditas[1].id_komoditas,
            nama_panen: `${kecamatan[13].nama_kecamatan} - ${komoditas[1].nama_komoditas}`,
            tahun_panen: 2025,
            produksi: 6.005,
            luas_panen: 1.092,
            produktivitas: 5.54
        },
        {
            id_kecamatan: kecamatan[14].id_kecamatan,
            id_komoditas: komoditas[1].id_komoditas,
            nama_panen: `${kecamatan[14].nama_kecamatan} - ${komoditas[1].nama_komoditas}`,
            tahun_panen: 2025,
            produksi: 1.835,
            luas_panen: 330,
            produktivitas: 5.56
        },
        {
            id_kecamatan: kecamatan[15].id_kecamatan,
            id_komoditas: komoditas[1].id_komoditas,
            nama_panen: `${kecamatan[15].nama_kecamatan} - ${komoditas[1].nama_komoditas}`,
            tahun_panen: 2025,
            produksi: 14.283,
            luas_panen: 2.646,
            produktivitas: 5.4
        },
        {
            id_kecamatan: kecamatan[16].id_kecamatan,
            id_komoditas: komoditas[1].id_komoditas,
            nama_panen: `${kecamatan[16].nama_kecamatan} - ${komoditas[1].nama_komoditas}`,
            tahun_panen: 2025,
            produksi: 7.879,
            luas_panen: 1.414,
            produktivitas: 5.57
        },
        {
            id_kecamatan: kecamatan[17].id_kecamatan,
            id_komoditas: komoditas[1].id_komoditas,
            nama_panen: `${kecamatan[17].nama_kecamatan} - ${komoditas[1].nama_komoditas}`,
            tahun_panen: 2025,
            produksi: 3.799,
            luas_panen: 689,
            produktivitas: 5.51
        },
        {
            id_kecamatan: kecamatan[18].id_kecamatan,
            id_komoditas: komoditas[1].id_komoditas,
            nama_panen: `${kecamatan[18].nama_kecamatan} - ${komoditas[1].nama_komoditas}`,
            tahun_panen: 2025,
            produksi: 1.744,
            luas_panen: 315,
            produktivitas: 5.54
        },
        {
            id_kecamatan: kecamatan[19].id_kecamatan,
            id_komoditas: komoditas[1].id_komoditas,
            nama_panen: `${kecamatan[19].nama_kecamatan} - ${komoditas[1].nama_komoditas}`,
            tahun_panen: 2025,
            produksi: 3.401,
            luas_panen: 616,
            produktivitas: 5.52
        },
        {
            id_kecamatan: kecamatan[20].id_kecamatan,
            id_komoditas: komoditas[1].id_komoditas,
            nama_panen: `${kecamatan[20].nama_kecamatan} - ${komoditas[1].nama_komoditas}`,
            tahun_panen: 2025,
            produksi: 1.930,
            luas_panen: 348,
            produktivitas: 5.55
        },
        {
            id_kecamatan: kecamatan[21].id_kecamatan,
            id_komoditas: komoditas[1].id_komoditas,
            nama_panen: `${kecamatan[21].nama_kecamatan} - ${komoditas[1].nama_komoditas}`,
            tahun_panen: 2025,
            produksi: 8.849,
            luas_panen: 1.915,
            produktivitas: 4.62
        }
    ];

    for (const data of hasilPanenData) {
        await prisma.hasilPanen.create({
            data
        });
    }

    console.log(`🟢 : Created ${hasilPanenData.length} hasil panen records`);
}

async function seedPrediksiPanen() {
    console.log('📄 : Seeding prediksi panen...');

    // Get all kecamatan and komoditas for reference
    const kecamatan = await prisma.kecamatan.findMany();
    const komoditas = await prisma.komoditas.findMany();

    const prediksiPanenData = [
        {
            id_kecamatan: kecamatan[0].id_kecamatan,
            id_komoditas: komoditas[0].id_komoditas,
            luas_panen: 2.161,
            tahun_prediksi: 2025,
            hasil_prediksi: 11.862,
            hasil_rata_rata: 5.48
        },
        {
            id_kecamatan: kecamatan[1].id_kecamatan,
            id_komoditas: komoditas[0].id_komoditas,
            luas_panen: 2.577,
            tahun_prediksi: 2025,
            hasil_prediksi: 15.835,
            hasil_rata_rata: 6.27
        },
        {
            id_kecamatan: kecamatan[2].id_kecamatan,
            id_komoditas: komoditas[0].id_komoditas,
            luas_panen: 3.696,
            tahun_prediksi: 2025,
            hasil_prediksi: 23.147,
            hasil_rata_rata: 6.35
        },
        {
            id_kecamatan: kecamatan[3].id_kecamatan,
            id_komoditas: komoditas[0].id_komoditas,
            luas_panen: 0,
            tahun_prediksi: 2025,
            hasil_prediksi: 0,
            hasil_rata_rata: 0
        },
        {
            id_kecamatan: kecamatan[4].id_kecamatan,
            id_komoditas: komoditas[0].id_komoditas,
            luas_panen: 2.627,
            tahun_prediksi: 2025,
            hasil_prediksi: 14.725,
            hasil_rata_rata: 5.4
        },
        {
            id_kecamatan: kecamatan[5].id_kecamatan,
            id_komoditas: komoditas[0].id_komoditas,
            luas_panen: 3.414,
            tahun_prediksi: 2025,
            hasil_prediksi: 21.104,
            hasil_rata_rata: 6.28
        },
        {
            id_kecamatan: kecamatan[6].id_kecamatan,
            id_komoditas: komoditas[0].id_komoditas,
            luas_panen: 3.171,
            tahun_prediksi: 2025,
            hasil_prediksi: 19.581,
            hasil_rata_rata: 6.24
        },
        {
            id_kecamatan: kecamatan[7].id_kecamatan,
            id_komoditas: komoditas[0].id_komoditas,
            luas_panen: 3.824,
            tahun_prediksi: 2025,
            hasil_prediksi: 23.714,
            hasil_rata_rata: 6.14
        },
        {
            id_kecamatan: kecamatan[8].id_kecamatan,
            id_komoditas: komoditas[0].id_komoditas,
            luas_panen: 2.468,
            tahun_prediksi: 2025,
            hasil_prediksi: 15.343,
            hasil_rata_rata: 6.3
        },
        {
            id_kecamatan: kecamatan[9].id_kecamatan,
            id_komoditas: komoditas[0].id_komoditas,
            luas_panen: 2.161,
            tahun_prediksi: 2025,
            hasil_prediksi: 13.208,
            hasil_rata_rata: 5.48
        },
        {
            id_kecamatan: kecamatan[10].id_kecamatan,
            id_komoditas: komoditas[0].id_komoditas,
            luas_panen: 3.057,
            tahun_prediksi: 2025,
            hasil_prediksi: 18.760,
            hasil_rata_rata: 6.18
        },
        {
            id_kecamatan: kecamatan[11].id_kecamatan,
            id_komoditas: komoditas[0].id_komoditas,
            luas_panen: 6.098,
            tahun_prediksi: 2025,
            hasil_prediksi: 39.493,
            hasil_rata_rata: 6.4
        },
        {
            id_kecamatan: kecamatan[12].id_kecamatan,
            id_komoditas: komoditas[0].id_komoditas,
            luas_panen: 3.097,
            tahun_prediksi: 2025,
            hasil_prediksi: 18.959,
            hasil_rata_rata: 6.06
        },
        {
            id_kecamatan: kecamatan[13].id_kecamatan,
            id_komoditas: komoditas[0].id_komoditas,
            luas_panen: 2.378,
            tahun_prediksi: 2025,
            hasil_prediksi: 14.024,
            hasil_rata_rata: 6.02
        },
        {
            id_kecamatan: kecamatan[14].id_kecamatan,
            id_komoditas: komoditas[0].id_komoditas,
            luas_panen: 3.497,
            tahun_prediksi: 2025,
            hasil_prediksi: 21.090,
            hasil_rata_rata: 5.95
        },
        {
            id_kecamatan: kecamatan[15].id_kecamatan,
            id_komoditas: komoditas[0].id_komoditas,
            luas_panen: 4.145,
            tahun_prediksi: 2025,
            hasil_prediksi: 11862,
            hasil_rata_rata: 5.48
        },
        {
            id_kecamatan: kecamatan[16].id_kecamatan,
            id_komoditas: komoditas[0].id_komoditas,
            luas_panen: 2.161,
            tahun_prediksi: 2025,
            hasil_prediksi: 26.511,
            hasil_rata_rata: 6.3
        },
        {
            id_kecamatan: kecamatan[17].id_kecamatan,
            id_komoditas: komoditas[0].id_komoditas,
            luas_panen: 6.270,
            tahun_prediksi: 2025,
            hasil_prediksi: 40.692,
            hasil_rata_rata: 6.49
        },
        {
            id_kecamatan: kecamatan[18].id_kecamatan,
            id_komoditas: komoditas[0].id_komoditas,
            luas_panen: 2.265,
            tahun_prediksi: 2025,
            hasil_prediksi: 13.825,
            hasil_rata_rata: 6.05
        },
        {
            id_kecamatan: kecamatan[19].id_kecamatan,
            id_komoditas: komoditas[0].id_komoditas,
            luas_panen: 4.211,
            tahun_prediksi: 2025,
            hasil_prediksi: 26.975,
            hasil_rata_rata: 6.48
        },
        {
            id_kecamatan: kecamatan[20].id_kecamatan,
            id_komoditas: komoditas[0].id_komoditas,
            luas_panen: 6.069,
            tahun_prediksi: 2025,
            hasil_prediksi: 38.559,
            hasil_rata_rata: 6.4
        },
        {
            id_kecamatan: kecamatan[21].id_kecamatan,
            id_komoditas: komoditas[0].id_komoditas,
            luas_panen: 3.914,
            tahun_prediksi: 2025,
            hasil_prediksi: 25.294,
            hasil_rata_rata: 6.45
        },
        {
            id_kecamatan: kecamatan[22].id_kecamatan,
            id_komoditas: komoditas[0].id_komoditas,
            luas_panen: 2.447,
            tahun_prediksi: 2025,
            hasil_prediksi: 13.807,
            hasil_rata_rata: 5.43
        }
    ];

    for (const data of prediksiPanenData) {
        await prisma.prediksiPanen.create({
            data
        });
    }

    console.log(`🟢 : Created ${prediksiPanenData.length} prediksi panen records`);
  }

main()
    .catch((e) => {
        console.error('🔴 : Error during seeding:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });