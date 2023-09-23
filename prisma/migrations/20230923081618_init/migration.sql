/*
  Warnings:

  - You are about to drop the column `otp_hash` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "otp_hash";

-- CreateTable
CREATE TABLE "user_otp" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "username" STRING(10) NOT NULL,
    "otp_hash" STRING NOT NULL,

    CONSTRAINT "primary" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_otp_username_key" ON "user_otp"("username");
