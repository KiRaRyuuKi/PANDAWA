-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "email" TEXT,
    "email_verified" TIMESTAMP(3),
    "password" TEXT,
    "image" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "detail" (
    "id_detail" TEXT NOT NULL,
    "id_tax" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "post_kode" TEXT NOT NULL,

    CONSTRAINT "detail_pkey" PRIMARY KEY ("id_detail")
);

-- CreateTable
CREATE TABLE "account" (
    "id" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    "id_provider" TEXT NOT NULL,
    "id_token" TEXT,
    "type" TEXT NOT NULL,
    "scope" TEXT,
    "provider" TEXT NOT NULL,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "access_token" TEXT,
    "refresh_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "session" (
    "id" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    "session_token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "token" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "data_kecamatan" (
    "id_kecamatan" SERIAL NOT NULL,
    "id_komoditas" INTEGER NOT NULL,
    "nama_kecamatan" VARCHAR(100) NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "gambar" TEXT NOT NULL,
    "area" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "data_kecamatan_pkey" PRIMARY KEY ("id_kecamatan")
);

-- CreateTable
CREATE TABLE "data_penduduk" (
    "id_penduduk" SERIAL NOT NULL,
    "id_kecamatan" INTEGER NOT NULL,
    "data_tahun" INTEGER NOT NULL,
    "jumlah_penduduk" DOUBLE PRECISION NOT NULL,
    "laju_pertumbuhan" VARCHAR(30) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "data_penduduk_pkey" PRIMARY KEY ("id_penduduk")
);

-- CreateTable
CREATE TABLE "data_komoditas" (
    "id_komoditas" SERIAL NOT NULL,
    "nama_komoditas" VARCHAR(100) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "data_komoditas_pkey" PRIMARY KEY ("id_komoditas")
);

-- CreateTable
CREATE TABLE "hasil_panen" (
    "id_panen" SERIAL NOT NULL,
    "id_kecamatan" INTEGER NOT NULL,
    "id_komoditas" INTEGER NOT NULL,
    "nama_panen" TEXT NOT NULL,
    "tahun_panen" INTEGER NOT NULL,
    "produksi" DOUBLE PRECISION NOT NULL,
    "luas_panen" DOUBLE PRECISION NOT NULL,
    "produktivitas" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "hasil_panen_pkey" PRIMARY KEY ("id_panen")
);

-- CreateTable
CREATE TABLE "prediksi_panen" (
    "id_prediksi" SERIAL NOT NULL,
    "id_kecamatan" INTEGER NOT NULL,
    "id_komoditas" INTEGER NOT NULL,
    "luas_panen" INTEGER NOT NULL,
    "tahun_prediksi" INTEGER NOT NULL,
    "hasil_prediksi" INTEGER NOT NULL,
    "hasil_rata_rata" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "prediksi_panen_pkey" PRIMARY KEY ("id_prediksi")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "detail_id_tax_key" ON "detail"("id_tax");

-- CreateIndex
CREATE UNIQUE INDEX "account_provider_id_provider_key" ON "account"("provider", "id_provider");

-- CreateIndex
CREATE UNIQUE INDEX "session_session_token_key" ON "session"("session_token");

-- CreateIndex
CREATE UNIQUE INDEX "token_token_key" ON "token"("token");

-- CreateIndex
CREATE UNIQUE INDEX "token_identifier_token_key" ON "token"("identifier", "token");

-- AddForeignKey
ALTER TABLE "detail" ADD CONSTRAINT "detail_id_tax_fkey" FOREIGN KEY ("id_tax") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "account" ADD CONSTRAINT "account_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "session" ADD CONSTRAINT "session_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "data_kecamatan" ADD CONSTRAINT "data_kecamatan_id_komoditas_fkey" FOREIGN KEY ("id_komoditas") REFERENCES "data_komoditas"("id_komoditas") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "data_penduduk" ADD CONSTRAINT "data_penduduk_id_kecamatan_fkey" FOREIGN KEY ("id_kecamatan") REFERENCES "data_kecamatan"("id_kecamatan") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hasil_panen" ADD CONSTRAINT "hasil_panen_id_kecamatan_fkey" FOREIGN KEY ("id_kecamatan") REFERENCES "data_kecamatan"("id_kecamatan") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hasil_panen" ADD CONSTRAINT "hasil_panen_id_komoditas_fkey" FOREIGN KEY ("id_komoditas") REFERENCES "data_komoditas"("id_komoditas") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prediksi_panen" ADD CONSTRAINT "prediksi_panen_id_kecamatan_fkey" FOREIGN KEY ("id_kecamatan") REFERENCES "data_kecamatan"("id_kecamatan") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prediksi_panen" ADD CONSTRAINT "prediksi_panen_id_komoditas_fkey" FOREIGN KEY ("id_komoditas") REFERENCES "data_komoditas"("id_komoditas") ON DELETE RESTRICT ON UPDATE CASCADE;
