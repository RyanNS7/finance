import { IBalanceRepository } from "../../../domain/usecases/finance/balanceRepository";
import { IUserRepository } from "../../../domain/usecases/user/userRepository";
import { NotFound, NumberError } from "../../../errors/baseError";

export class InsertValueIntoTotalBalance{
    userRepo: IUserRepository
    balanceRepo: IBalanceRepository

    constructor(balanceRepo: IBalanceRepository, userRepo: IUserRepository){
        this.balanceRepo = balanceRepo
        this.userRepo = userRepo
    }

    async insertValue(valueIntered: number, id_user: string){

        if(valueIntered <= 0){
            return new NumberError("The number added cannot be greater than or equal to zero")
        }

        const verifyUser = await this.userRepo.findUserById(id_user)
        if(verifyUser instanceof NotFound){
            return verifyUser
        }

        const insert = await this.balanceRepo.insertValueIntoTotalBalance(valueIntered, id_user)

        return insert
    }
}