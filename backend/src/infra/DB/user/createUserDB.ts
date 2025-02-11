import { User } from "../../../domain/entities/user/user";
import { prisma } from "../prisma";

export async function createUserDB(userInfo: User){

    try {

        const user = await prisma.user.create({data: {name: userInfo.name, email: userInfo.email, password: userInfo.password}})
        const totalBalance = await prisma.totalBalance.create({data: {userID: user.id}})     
        
        return user
    } catch (error) {
        return error
    }

}