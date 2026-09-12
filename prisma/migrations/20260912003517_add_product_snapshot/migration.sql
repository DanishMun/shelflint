-- CreateTable
CREATE TABLE "productSnapShot" (
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

    CONSTRAINT "productSnapShot_pkey" PRIMARY KEY ("id")
);
