/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `projects` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `suits` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `tests` will be added. If there are existing duplicate values, this will fail.
  - Made the column `name` on table `projects` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "projects" ALTER COLUMN "name" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "projects_name_key" ON "projects"("name");

-- CreateIndex
CREATE UNIQUE INDEX "suits_name_key" ON "suits"("name");

-- CreateIndex
CREATE UNIQUE INDEX "tests_name_key" ON "tests"("name");
