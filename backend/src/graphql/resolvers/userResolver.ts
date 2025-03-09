import { Arg, Field, FieldResolver, ID, Int, Mutation, ObjectType, Query, Resolver, Root } from "type-graphql";
import { User, UserInputType } from "../modules/user/user";
import { findUserByEmail } from "../../application/usecases/user/findUserByEmailUseCase";
import { UserRepositoryDB } from "../../infra/implementations/userRepository";
import { findUserById } from "../../application/usecases/user/findUserByIdUseCase";
import { createUser } from "../../application/usecases/user/createUserUseCase";
import { CryptographyRepository } from "../../infra/implementations/cryptographyRepository";
import { Balance } from "../modules/balance/balance";
import { BalanceRepository } from "../../infra/implementations/balanceRepository";
import { GetBalance } from "../../application/usecases/balance/getBalanceUseCase";
import { TotalBalanceDTO } from "../../domain/entities/finance/totalBalanceDTO";
import { NotFound } from "../../errors/baseError";

@Resolver(User)
export class UserResolver{

    @Query(() => User!)
    async findUserByEmail(@Arg("email", type => String) email: string){return await new findUserByEmail(new UserRepositoryDB()).find(email)}

    @Query(() => User!)
    async findUserByID(@Arg("id", type => String) id: string){return await new findUserById(new UserRepositoryDB()).find(id)}  

    @Mutation(() => User!)
    async createUser(
        @Arg("user", type => UserInputType) user: UserInputType
    ){
        return await new createUser(new UserRepositoryDB(), new CryptographyRepository()).create(user)
    }
    
    @FieldResolver(() => Balance!)
    async totalBalance(@Root() user: User){
        
        const balance = await new GetBalance(new BalanceRepository()).get(String(user.id))

        if(balance instanceof NotFound){
            return balance
        }
        
        return {...(balance as TotalBalanceDTO).totalBalance, total_balance: Number((balance as TotalBalanceDTO).totalBalance.total_balance)}
    }

}
