-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "title" TEXT,
    "src" TEXT NOT NULL DEFAULT '',
    "srcCover" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "productId" INTEGER,
    CONSTRAINT "Product_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Category" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Product" ("description", "id", "name", "price", "productId", "src", "title") SELECT "description", "id", "name", "price", "productId", "src", "title" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
