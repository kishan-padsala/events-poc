/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Event" (
    "id" VARCHAR(20) NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "startDate" VARCHAR(40) NOT NULL,
    "endDate" VARCHAR(40) NOT NULL,
    "location" VARCHAR(40) NOT NULL,
    "eventImage" VARCHAR(500) NOT NULL,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);
