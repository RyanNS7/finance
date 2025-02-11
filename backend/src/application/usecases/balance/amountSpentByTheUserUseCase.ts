import { amountSpent } from "../../../domain/entities/finance/amountSpent";
import { IBalanceRepository } from "../../../domain/usecases/finance/balanceRepository";

export class AmountSpentByTheUser{
    balanceRepo: IBalanceRepository

    constructor(balanceRepo: IBalanceRepository){
        this.balanceRepo = balanceRepo
    }

    async amountSpent(amountSpent: amountSpent, id_user: string){

        const amountSpentByTheUser = await this.balanceRepo.amountSpentByTheUser(amountSpent, id_user)

        return amountSpentByTheUser
    }
}