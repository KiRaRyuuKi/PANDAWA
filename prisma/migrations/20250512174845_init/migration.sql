/*
  Warnings:

  - You are about to drop the column `county` on the `detail` table. All the data in the column will be lost.
  - You are about to drop the column `photo_profile` on the `detail` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `users` table. All the data in the column will be lost.
  - Added the required column `country` to the `detail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "detail" DROP COLUMN "county",
DROP COLUMN "photo_profile",
ADD COLUMN     "country" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "name",
ADD COLUMN     "firs_name" TEXT,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "last_name" TEXT;
