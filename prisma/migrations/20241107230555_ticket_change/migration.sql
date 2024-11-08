/*
  Warnings:

  - You are about to drop the column `assignedToUserID` on the `ticket` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Ticket_assignedToUserID_idx` ON `ticket`;

-- AlterTable
ALTER TABLE `ticket` DROP COLUMN `assignedToUserID`,
    ADD COLUMN `assignedToUserId` INTEGER NULL;
