import { Field, ID, InputType, Int, ObjectType } from "type-graphql";

@ObjectType()
export class Balance{
    @Field(type => ID!)
    id: string

    @Field(type => Int!)
    total_balance: Number

    @Field(type => ID!)
    userID: string
}

@ObjectType()
export class AmountSpentByUser{
    @Field(type => ID!)
    id: string

    @Field(type => Int!)
    money_spent: number

    @Field(type => String ,{ nullable: true })
    description?: string

    @Field(type => Date)
    day_was_the_spent: Date

    @Field(type => ID!)
    userID: string

}

@InputType()
export class InputAmountSpent{
    @Field(type => Int!)
    money_spent: number

    @Field(type => String ,{ nullable: true })
    description?: string
}