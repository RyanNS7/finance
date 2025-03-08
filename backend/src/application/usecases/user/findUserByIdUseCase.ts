import { UserDTO } from "../../../domain/entities/user/userDTO";
import { IUserRepository } from "../../../domain/usecases/user/userRepository";

export class findUserById {
    userRepo: IUserRepository

    constructor(userRepo: IUserRepository){
        this.userRepo = userRepo
    }

    async find(id_user: string){

        const userInfo = await this.userRepo.findUserById(id_user)
        
        if(userInfo instanceof UserDTO){
            return userInfo.user
        }

        return userInfo
    }
}