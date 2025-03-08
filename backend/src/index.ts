import 'dotenv/config'
import "reflect-metadata";
import { ApolloServer} from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone'
import { buildSchema } from "type-graphql";
import { UserResolver } from "./graphql/resolvers/userResolver";
import { BalanceResolver } from './graphql/resolvers/balanceResolver';


async function main(){

    const schema = await buildSchema({
        resolvers: [UserResolver, BalanceResolver],
        
    })

    const server = new ApolloServer({schema})

    const {url} = await startStandaloneServer(server, { listen: {port: 4000}})

    console.log(url)
}

main()