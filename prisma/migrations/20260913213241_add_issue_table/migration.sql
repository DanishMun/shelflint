/*
  Warnings:

  - You are about to drop the `productSnapshot` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."productSnapshot";

-- CreateTable
CREATE TABLE "ProductSnapshot" (
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

    CONSTRAINT "ProductSnapshot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Issue" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "shop" TEXT NOT NULL,
    "ruleId" TEXT NOT NULL,
    "severity" TEXT NOT NULL,
    "currentValue" TEXT,
    "status" TEXT NOT NULL DEFAULT 'open',
    "foundAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Issue_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ProductSnapshot_shop_idx" ON "ProductSnapshot"("shop");

-- CreateIndex
CREATE UNIQUE INDEX "ProductSnapshot_shop_productGid_key" ON "ProductSnapshot"("shop", "productGid");

-- CreateIndex
CREATE INDEX "Issue_shop_idx" ON "Issue"("shop");

-- CreateIndex
CREATE UNIQUE INDEX "Issue_shop_productId_ruleId_key" ON "Issue"("shop", "productId", "ruleId");

-- AddForeignKey
ALTER TABLE "Issue" ADD CONSTRAINT "Issue_productId_fkey" FOREIGN KEY ("productId") REFERENCES "ProductSnapshot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
