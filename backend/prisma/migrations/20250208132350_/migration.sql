-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TotalBalance" (
    "id" TEXT NOT NULL,
    "total_balance" BIGINT NOT NULL DEFAULT 0,
    "userID" TEXT NOT NULL,

    CONSTRAINT "TotalBalance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AmountSpent" (
    "id" TEXT NOT NULL,
    "description" TEXT,
    "money_spent" BIGINT NOT NULL,
    "day_was_the_spent" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userID" TEXT NOT NULL,

    CONSTRAINT "AmountSpent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "TotalBalance" ADD CONSTRAINT "TotalBalance_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AmountSpent" ADD CONSTRAINT "AmountSpent_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
