-- Enable uuid-ossp extension if not enabled (Supabase typically has this active)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Create Enums
CREATE TYPE "KycLevel" AS ENUM ('NONE', 'TIER_1', 'TIER_2', 'TIER_3');
CREATE TYPE "TxType" AS ENUM ('DEPOSIT', 'WITHDRAW', 'BUY', 'SELL', 'SWAP', 'TRANSFER');
CREATE TYPE "TxStatus" AS ENUM ('PENDING', 'PROCESSING', 'COMPLETED', 'FAILED', 'CANCELLED');
CREATE TYPE "PmtType" AS ENUM ('BANK_ACH', 'CREDIT_CARD', 'APPLE_PAY');

-- 2. Create User Table
CREATE TABLE "User" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4()::text,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "kycLevel" "KycLevel" NOT NULL DEFAULT 'NONE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- 3. Create Wallet Table
CREATE TABLE "Wallet" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4()::text,
    "userId" TEXT NOT NULL,
    "asset" TEXT NOT NULL,
    "balance" DECIMAL(65,30) NOT NULL DEFAULT 0.0,
    "depositAddress" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Wallet_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "Wallet_userId_asset_key" ON "Wallet"("userId", "asset");

-- 4. Create Transaction Table
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4()::text,
    "userId" TEXT NOT NULL,
    "type" "TxType" NOT NULL,
    "asset" TEXT NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "usdValue" DECIMAL(65,30) NOT NULL,
    "fee" DECIMAL(65,30) NOT NULL DEFAULT 0.0,
    "status" "TxStatus" NOT NULL DEFAULT 'PENDING',
    "txHash" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- 5. Create PaymentMethod Table
CREATE TABLE "PaymentMethod" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4()::text,
    "userId" TEXT NOT NULL,
    "type" "PmtType" NOT NULL,
    "providerData" JSONB NOT NULL,
    "isDefault" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PaymentMethod_pkey" PRIMARY KEY ("id")
);

-- 6. Add Foreign Keys for Relations
ALTER TABLE "Wallet" ADD CONSTRAINT "Wallet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "PaymentMethod" ADD CONSTRAINT "PaymentMethod_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
