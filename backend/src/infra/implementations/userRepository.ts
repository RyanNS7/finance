import { User } from "../../domain/entities/user/user";
import { UserDTO } from "../../domain/entities/user/userDTO";
import { IUserRepository } from "../../domain/usecases/user/userRepository";
import { NotFound } from "../../errors/baseError";
import { createUserDB } from "../DB/user/createUserDB";
import { findUserByEmail } from "../DB/user/findUserByEmailDB";
import { findUserById } from "../DB/user/findUserByIdDB";
import { isValidEmail } from "../validations/isValidEmail";

export class UserRepositoryDB implements IUserRepository{
    async create(user: User): Promise<UserDTO> {
        const userInfo = await createUserDB(user)
        return new UserDTO(userInfo)
    }

    async findUserByEmail(email: string): Promise<UserDTO | NotFound> {

        const user = await findUserByEmail(email)

        return user
    }

    async findUserById(id: string): Promise<UserDTO | NotFound> {
        const user = await findUserById(id)

        return user
    }

    async isValidEmail(email: string): Promise<boolean> {
        const verifyEmail = await isValidEmail(email)

        return verifyEmail
    }
}