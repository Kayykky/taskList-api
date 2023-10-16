/*
  Warnings:

  - You are about to drop the column `category_id` on the `lists` table. All the data in the column will be lost.
  - You are about to drop the `categories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "categories" DROP CONSTRAINT "categories_user_id_fkey";

-- DropForeignKey
ALTER TABLE "lists" DROP CONSTRAINT "lists_category_id_fkey";

-- AlterTable
ALTER TABLE "lists" DROP COLUMN "category_id";

-- DropTable
DROP TABLE "categories";
