/*
  Warnings:

  - You are about to drop the `productSnapShot` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."productSnapShot";

-- CreateTable
CREATE TABLE "productSnapshot" (
    "shop" TEXT NOT NULL,
    "productGid" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "seoTitle" TEXT,
    "seoDescription" TEXT,
    "productType" TEXT,
    "vendor" TEXT,
    "fetchedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "productSnapshot_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "productSnapshot_shop_idx" ON "productSnapshot"("shop");

-- CreateIndex
CREATE UNIQUE INDEX "productSnapshot_shop_productGid_key" ON "productSnapshot"("shop", "productGid");
