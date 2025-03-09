import { Arg, ID, Mutation, Query, Resolver } from "type-graphql";
import { GetBalance } from "../../application/usecases/balance/getBalanceUseCase";
import { BalanceRepository } from "../../infra/implementations/balanceRepository";
import { InsertValueIntoTotalBalance } from "../../application/usecases/balance/insertValueIntoTotalBalanceUseCase";
import { UserRepositoryDB } from "../../infra/implementations/userRepository";
import { AmountSpentByTheUser } from "../../application/usecases/balance/amountSpentByTheUserUseCase";
import { AmountSpentByUser, Balance, InputAmountSpent } from "../modules/balance/balance";
import { TotalBalanceDTO } from "../../domain/entities/finance/totalBalanceDTO";
import { AmountSpentDTO } from "../../domain/entities/finance/amountSpentDTO";

@Resolver(Balance!)
export class BalanceResolver{
    @Query(() => Balance!)
    async getBalance(@Arg("userID", type => ID!) id: string){
        const balance = await new GetBalance(new BalanceRepository()).get(id)

        if(balance instanceof TotalBalanceDTO){
            return {...balance.totalBalance, total_balance: Number(balance.totalBalance.total_balance)}
        }

        return balance
    }

    @Mutation(() => Balance!)
    async insertValueIntoTotalBalance(
        @Arg("valueIntered", type => Number!) valueIntered: number, 
        @Arg("userID", type => ID!) id_user: string){
        const insertValue = await new InsertValueIntoTotalBalance(new BalanceRepository(), new UserRepositoryDB()).insertValue(valueIntered, id_user)

        if(insertValue instanceof TotalBalanceDTO){
            return {...insertValue.totalBalance, total_balance: Number(insertValue.totalBalance.total_balance)}
        }

        return insertValue
    }

    @Mutation(() => AmountSpentByUser!)
    async amountSpent(
        @Arg("amountSpent", type => InputAmountSpent) inputAmountSpent: InputAmountSpent,
        @Arg("userID", type => ID!) id_user: string
    ){
        const amount = await new AmountSpentByTheUser(new BalanceRepository()).amountSpent(inputAmountSpent, id_user)

        if(amount instanceof AmountSpentDTO){
            return amount.amountSpent
        }

        return amount
    }
}