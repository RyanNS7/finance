import { TotalBalanceDTO } from "../../../domain/entities/finance/totalBalanceDTO";
import { prisma } from "../prisma";

export async function getBalance(id_user: string){

    const balance = await prisma.totalBalance.findFirstOrThrow({where: {userID: id_user}})

    return new TotalBalanceDTO(balance)
}