/*
  Warnings:

  - The required column `user_id` was added to the `Farm` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "Farm" ADD COLUMN     "user_id" UUID NOT NULL;
