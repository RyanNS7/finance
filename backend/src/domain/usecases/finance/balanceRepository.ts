import { NotFound, NumberError } from "../../../errors/baseError";
import { amountSpent } from "../../entities/finance/amountSpent";
import { AmountSpentDTO } from "../../entities/finance/amountSpentDTO";
import { TotalBalanceDTO } from "../../entities/finance/totalBalanceDTO";

export interface IBalanceRepository {
    getBalance(id_user: string): Promise<TotalBalanceDTO | NotFound>
    insertValueIntoTotalBalance(valueIntered: number, id_user: string): Promise<TotalBalanceDTO | NotFound | NumberError>
    deductValueFromTheTotalBalance(amountToBeDeducted: number, id_user: string): Promise<TotalBalanceDTO | NotFound | NumberError>
    amountSpentByTheUser(amountSpent: amountSpent, id_user: string): Promise<AmountSpentDTO>
}