import { Arg, Field, FieldResolver, ID, Int, Mutation, ObjectType, Query, Resolver, Root } from "type-graphql";
import { User, UserInputType } from "../modules/user/user";
import { findUserByEmail } from "../../application/usecases/user/findUserByEmailUseCase";
import { UserRepositoryDB } from "../../infra/implementations/userRepository";
import { findUserById } from "../../application/usecases/user/findUserByIdUseCase";
import { createUser } from "../../application/usecases/user/createUserUseCase";
import { CryptographyRepository } from "../../infra/implementations/cryptographyRepository";
import { getBalance } from "../../infra/DB/balance/getBalanceDB";
import { deductValueFromTheTotalBalance } from "../../infra/DB/balance/deductValueFromTheTotalBalanceDB";
import { insertValueIntoTotalBalance } from "../../infra/DB/balance/insertValueIntoTotalBalanceDB";

@ObjectType()
export class Balance{
    @Field(type => ID!)
    id: String

    @Field(type => Int! )
    total_balance: Number

    @Field(() => String)
    userID: String
}

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
        
        const balance = await getBalance(String(user.id))
        
        return {...balance.totalBalance, total_balance: Number(balance.totalBalance.total_balance)}
    }

}
