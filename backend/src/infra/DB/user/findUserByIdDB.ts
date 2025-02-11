import { UserDTO } from "../../../domain/entities/user/userDTO"
import { prisma } from "../prisma"

export async function findUserById(id_user: string){
    try {
        const user = await prisma.user.findUnique({where: {id: id_user}})

        return new UserDTO(user)
    } catch (error) {
        return error
    }
} 