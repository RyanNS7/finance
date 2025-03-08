import { amountSpent } from "../../../domain/entities/finance/amountSpent";
import { TotalBalanceDTO } from "../../../domain/entities/finance/totalBalanceDTO";
import { IBalanceRepository } from "../../../domain/usecases/finance/balanceRepository";
import { NotFound, NumberError } from "../../../errors/baseError";

export class AmountSpentByTheUser{
    balanceRepo: IBalanceRepository

    constructor(balanceRepo: IBalanceRepository){
        this.balanceRepo = balanceRepo
    }

    async amountSpent(amountSpent: amountSpent, id_user: string){

        const balance = await this.balanceRepo.getBalance(id_user)
        
        if(balance instanceof NotFound){
            return balance
        }

        if(amountSpent.money_spent > (balance as TotalBalanceDTO).totalBalance.total_balance){
            return new NumberError("The number to withdraw is greater than the total balance")
        }

        const deduct = await this.balanceRepo.deductValueFromTheTotalBalance(amountSpent.money_spent, id_user)

        if(deduct instanceof NotFound || deduct instanceof NumberError){
            return deduct
        }
        
        const amountSpentByTheUser = await this.balanceRepo.amountSpentByTheUser(amountSpent, id_user)

        return amountSpentByTheUser
    }
}