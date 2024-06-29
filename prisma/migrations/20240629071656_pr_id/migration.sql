-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "src" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "productId" INTEGER,
    CONSTRAINT "Product_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Category" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
