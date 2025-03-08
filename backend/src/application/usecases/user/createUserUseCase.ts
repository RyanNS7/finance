import { User } from "../../../domain/entities/user/user";
import { ICryptographyRepository } from "../../../domain/usecases/cryptography/cryptographyRepository";
import { IUserRepository } from "../../../domain/usecases/user/userRepository";
import { InsufficientCharacters, InvalidEmail } from "../../../errors/baseError";

export class createUser{

    userRepo: IUserRepository
    cryptoRepo: ICryptographyRepository


    constructor(userRepo: IUserRepository, cryptoRepo: ICryptographyRepository){
        this.userRepo = userRepo
        this.cryptoRepo = cryptoRepo
    }

    async create(userInfo: {name: string, email: string, password: string}){

        const verificationEmail = await this.userRepo.isValidEmail(userInfo.email)

        if(verificationEmail === false){
            return new InvalidEmail("The email used by the user is invalid, please try again")
        }

        if(userInfo.name.length < 3 || userInfo.name.length > 40){
            return new InsufficientCharacters("Name must be more than 3 characters and less than 40 required")
        }

        if(userInfo.password.length < 7 || userInfo.password.length > 25){
            return new InsufficientCharacters("Password must be more than 7 characters and less than 25 required")
        }

        const passwordHash = await this.cryptoRepo.createHash(userInfo.password)
        const user = new User(userInfo.name, userInfo.email, passwordHash)
        const data = await this.userRepo.create(user)
        return data.user
    }

}