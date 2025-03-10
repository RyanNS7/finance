import { TotalBalanceDTO } from "../../../domain/entities/finance/totalBalanceDTO";
import { NumberError } from "../../../errors/baseError";
import { prisma } from "../prisma";

export async function deductValueFromTheTotalBalance(amountToBeDeducted: number, id_user: string ){
    const totalBalanceUser= await prisma.totalBalance.findFirstOrThrow({where: {userID: id_user}})

    if((amountToBeDeducted * 100) > Number(totalBalanceUser.total_balance)){
        return new NumberError("The number to withdraw is greater than the total balance")
    }

    const deductValue = await prisma.totalBalance.update({data: {total_balance: {decrement: amountToBeDeducted * 100}}, where: {id: totalBalanceUser.id}})

    return new TotalBalanceDTO(deductValue)
}