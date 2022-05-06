/*
  Warnings:

  - You are about to drop the `CustomWorkout` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `ownerId` to the `Workout` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CustomWorkout" DROP CONSTRAINT "CustomWorkout_ownerId_fkey";

-- AlterTable
ALTER TABLE "Workout" ADD COLUMN     "ownerId" INTEGER NOT NULL,
ADD COLUMN     "public" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "tags" TEXT[],
ADD COLUMN     "targetMuscels" TEXT[];

-- DropTable
DROP TABLE "CustomWorkout";

-- AddForeignKey
ALTER TABLE "Workout" ADD CONSTRAINT "Workout_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
