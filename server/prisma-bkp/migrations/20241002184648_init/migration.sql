-- CreateEnum
CREATE TYPE "Bairros" AS ENUM ('BARRA', 'CENTRO', 'JARDIM', 'SANTA_MARIA', 'SANTO_ANTONIO', 'SAO_JOSE');

-- CreateEnum
CREATE TYPE "Problemas" AS ENUM ('BURACO', 'ILUMINACAO', 'LIMPEZA', 'SINALIZACAO', 'OUTRO');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

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

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
