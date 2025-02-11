import { IBalanceRepository } from "../../../domain/usecases/finance/balanceRepository";

export class InsertValueIntoTotalBalance{
    balanceRepo: IBalanceRepository

    constructor(balanceRepo: IBalanceRepository){
        this.balanceRepo = balanceRepo
    }

    async insertValue(valueIntered: number, id_user: string){

        const insert = await this.balanceRepo.insertValueIntoTotalBalance(valueIntered, id_user)

        return insert
    }
}