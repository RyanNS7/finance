import { UserDTO } from "../../../domain/entities/user/userDTO"
import { NotFound } from "../../../errors/baseError"
import { prisma } from "../prisma"

export async function findUserByEmail(email: string){
    try {
        const user = await prisma.user.findUnique({where: {email}})

        return new UserDTO(user)
    } catch (error) {
        return new NotFound(error)
    }
} 