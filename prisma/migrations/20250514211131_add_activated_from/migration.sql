-- CreateEnum
CREATE TYPE "Role" AS ENUM ('admin', 'super_admin');

-- CreateTable
CREATE TABLE "system_users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "last_login" TIMESTAMP(3),
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'admin',

    CONSTRAINT "system_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shawdowsocks_code" (
    "vpn_id" TEXT NOT NULL,
    "main_link" TEXT NOT NULL,
    "alternative_link" TEXT,
    "mirror1" TEXT,
    "mirror2" TEXT,
    "code_usage_count" INTEGER NOT NULL,
    "code_max_usage" INTEGER NOT NULL,
    "total_data" BIGINT NOT NULL,
    "valid_upto" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_left" BIGINT NOT NULL,
    "activated_from" TIMESTAMP(3),

    CONSTRAINT "shawdowsocks_code_pkey" PRIMARY KEY ("vpn_id")
);

-- CreateTable
CREATE TABLE "vpn_users" (
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "package_days" INTEGER NOT NULL,
    "passportNo" TEXT,
    "phnNo" TEXT,
    "email" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "vpn_id" TEXT NOT NULL,

    CONSTRAINT "vpn_users_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "password_protect" (
    "id" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "expiry_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "password_protect_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "system_users_email_key" ON "system_users"("email");

-- AddForeignKey
ALTER TABLE "vpn_users" ADD CONSTRAINT "vpn_users_vpn_id_fkey" FOREIGN KEY ("vpn_id") REFERENCES "shawdowsocks_code"("vpn_id") ON DELETE RESTRICT ON UPDATE CASCADE;
