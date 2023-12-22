-- CreateTable
CREATE TABLE "Numbers" (
    "id" SERIAL NOT NULL,
    "number" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Numbers_pkey" PRIMARY KEY ("id")
);
