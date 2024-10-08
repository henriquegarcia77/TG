-- CreateEnum
CREATE TYPE "Bairros" AS ENUM ('BARRA', 'CENTRO', 'JARDIM', 'SANTA_MARIA', 'SANTO_ANTONIO', 'SAO_JOSE');

-- CreateEnum
CREATE TYPE "Problemas" AS ENUM ('BURACO', 'ILUMINACAO', 'LIMPEZA', 'SINALIZACAO', 'OUTRO');

-- CreateTable
CREATE TABLE "Report" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "bairro" "Bairros" NOT NULL,
    "problema" "Problemas" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);
