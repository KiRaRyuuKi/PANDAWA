/*
  Warnings:

  - You are about to drop the column `firs_name` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "firs_name",
ADD COLUMN     "first_name" TEXT;
