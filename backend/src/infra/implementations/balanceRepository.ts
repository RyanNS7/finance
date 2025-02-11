import { AmountSpentDTO } from "../../domain/entities/finance/amountSpentDTO";
import { TotalBalanceDTO } from "../../domain/entities/finance/totalBalanceDTO";
import { IBalanceRepository, amountSpent } from "../../domain/usecases/finance/balanceRepository";
import { amountSpentDB } from "../DB/balance/amountSpentDB";
import { deductValueFromTheTotalBalance } from "../DB/balance/deductValueFromTheTotalBalanceDB";
import { getBalance } from "../DB/balance/getBalanceDB";
import { insertValueIntoTotalBalance } from "../DB/balance/insertValueIntoTotalBalanceDB";

export class BalanceRepository implements IBalanceRepository{
    async getBalance(id_user: string): Promise<TotalBalanceDTO> {
        const balance = await getBalance(id_user)

        return balance
    }

    async insertValueIntoTotalBalance(valueIntered: number, id_user: string): Promise<TotalBalanceDTO> {
        const insertValue = await insertValueIntoTotalBalance(valueIntered, id_user)

        return insertValue
    }

    async deductValueFromTheTotalBalance(amountToBeDeducted: number, id_user: string): Promise<TotalBalanceDTO> {
        const deductValue = await deductValueFromTheTotalBalance(amountToBeDeducted, id_user)

        return deductValue
    }

    async amountSpentByTheUser(amountSpentUser: amountSpent, id_user: string): Promise<AmountSpentDTO> {
        const amount = await amountSpentDB(amountSpentUser, id_user)

        return amount
    }
}