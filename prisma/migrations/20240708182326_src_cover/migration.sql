-- CreateTable
CREATE TABLE "Combination" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "title" TEXT,
    "src" TEXT NOT NULL DEFAULT '',
    "srcCover" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "combinationId" INTEGER,
    CONSTRAINT "Combination_combinationId_fkey" FOREIGN KEY ("combinationId") REFERENCES "Product" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
