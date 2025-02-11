import { Field, ID, InputType, ObjectType } from "type-graphql";

@ObjectType()
export class User {
    @Field(type => ID!)
    id: String;

    @Field(() => String!)
    name: String;

    @Field(() => String!)
    email: String;

    @Field(() => String!)
    password: String;
}

@InputType()
export class UserInputType{
    @Field(() => String!)
    name: string;

    @Field(() => String!)
    email: string;

    @Field(() => String!)
    password: string;
}