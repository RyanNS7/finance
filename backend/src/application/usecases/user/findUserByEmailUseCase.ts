import { UserDTO } from "../../../domain/entities/user/userDTO";
import { IUserRepository } from "../../../domain/usecases/user/userRepository";

export class findUserByEmail {
    userRepo: IUserRepository

    constructor(userRepo: IUserRepository){
        this.userRepo = userRepo
    }

    async find(email: string){

        const userInfo = await this.userRepo.findUserByEmail(email)

        if(userInfo instanceof UserDTO){
            return userInfo.user
        }

        return userInfo
    }
}