import { amountSpent } from "../../../domain/entities/finance/amountSpent";
import { AmountSpentDTO } from "../../../domain/entities/finance/amountSpentDTO";
import { prisma } from "../prisma";

export async function amountSpentDB(amountSpent: amountSpent, id_user: string){
    const amountSpentUser = await prisma.amountSpent.create({data: {money_spent: amountSpent.money_spent, description: amountSpent.description, userID: id_user}})

    return new AmountSpentDTO({...amountSpentUser, money_spent: Number(amountSpent.money_spent)})
}