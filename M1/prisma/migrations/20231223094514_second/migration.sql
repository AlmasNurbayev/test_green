/*
  Warnings:

  - You are about to drop the column `number` on the `numbers` table. All the data in the column will be lost.
  - Added the required column `value` to the `numbers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "numbers" DROP COLUMN "number",
ADD COLUMN     "value" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "numbers_recieved" (
    "id" SERIAL NOT NULL,
    "numbers_id" INTEGER NOT NULL,
    "value" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "numbers_recieved_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "numbers_recieved" ADD CONSTRAINT "numbers_recieved_numbers_id_fkey" FOREIGN KEY ("numbers_id") REFERENCES "numbers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
