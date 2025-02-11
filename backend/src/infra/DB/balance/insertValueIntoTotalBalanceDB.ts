import { TotalBalanceDTO } from "../../../domain/entities/finance/totalBalanceDTO";
import { prisma } from "../prisma";

export async function insertValueIntoTotalBalance(valueIntered: number, id_user: string ){
    const totalBalanceUser= await prisma.totalBalance.findFirstOrThrow({where: {userID: id_user}})

    const insertValue = await prisma.totalBalance.update({data: {total_balance: {increment: valueIntered * 100}}, where: {id: totalBalanceUser.id}})

    return new TotalBalanceDTO(insertValue)
}