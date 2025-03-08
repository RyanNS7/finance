import { IBalanceRepository } from "../../../domain/usecases/finance/balanceRepository";
import { NotFound, NumberError } from "../../../errors/baseError";

export class DeductValueIntoTotalBalance{
    balanceRepo: IBalanceRepository

    constructor(balanceRepo: IBalanceRepository){
        this.balanceRepo = balanceRepo
    }

    async deductValue(amountToBeDeducted: number, id_user: string){

        const balance = await this.balanceRepo.getBalance(id_user)

        if(balance instanceof NotFound){
            return balance
        }

        const deduct = await this.balanceRepo.deductValueFromTheTotalBalance(amountToBeDeducted, id_user)

        return deduct
    }
}