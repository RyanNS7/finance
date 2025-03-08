import { NotFound } from "../../../errors/baseError"
import { User } from "../../entities/user/user"
import { UserDTO } from "../../entities/user/userDTO"

export interface IUserRepository{
    create(user: User): Promise<UserDTO>
    isValidEmail(email: string): Promise<boolean>
    findUserById(id: string): Promise<UserDTO | NotFound>
    findUserByEmail(email: string): Promise<UserDTO | NotFound>
}