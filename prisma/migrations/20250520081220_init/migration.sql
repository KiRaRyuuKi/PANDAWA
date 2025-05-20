/*
  Warnings:

  - Added the required column `nama_panen` to the `hasil_panen` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "hasil_panen" ADD COLUMN     "nama_panen" TEXT NOT NULL;
