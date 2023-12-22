/*
  Warnings:

  - You are about to drop the `Numbers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Numbers";

-- CreateTable
CREATE TABLE "numbers" (
    "id" SERIAL NOT NULL,
    "number" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "numbers_pkey" PRIMARY KEY ("id")
);
