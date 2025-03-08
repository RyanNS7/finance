import { TotalBalanceDTO } from "../../../domain/entities/finance/totalBalanceDTO";
import { IBalanceRepository } from "../../../domain/usecases/finance/balanceRepository";
import { IUserRepository } from "../../../domain/usecases/user/userRepository";
import { NotFound } from "../../../errors/baseError";

export class GetBalance{

    balanceRepo: IBalanceRepository
    userRepo: IUserRepository

    constructor(balanceRepo: IBalanceRepository){
        this.balanceRepo = balanceRepo
    }

    async get(id_user: string): Promise<TotalBalanceDTO | NotFound>{
        const totalBalance = await this.balanceRepo.getBalance(id_user)

        return totalBalance
    }
}