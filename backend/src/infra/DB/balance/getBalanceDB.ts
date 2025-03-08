import { TotalBalanceDTO } from "../../../domain/entities/finance/totalBalanceDTO";
import { NotFound } from "../../../errors/baseError";
import { prisma } from "../prisma";

export async function getBalance(id_user: string){

    try {
        const balance = await prisma.totalBalance.findFirstOrThrow({where: {userID: id_user}})

        return new TotalBalanceDTO(balance)        
    } catch (error) {
        return new NotFound(error)
    }

}