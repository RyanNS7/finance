import { IBalanceRepository } from "../../../domain/usecases/finance/balanceRepository";

export class InsertValueIntoTotalBalance{
    balanceRepo: IBalanceRepository

    constructor(balanceRepo: IBalanceRepository){
        this.balanceRepo = balanceRepo
    }

    async deductValue(amountToBeDeducted: number, id_user: string){

        const deduct = await this.balanceRepo.deductValueFromTheTotalBalance(amountToBeDeducted, id_user)

        return deduct
    }
}