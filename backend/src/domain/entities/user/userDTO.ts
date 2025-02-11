export interface IUser {
    id: string,
    name: string,
    email: string,
    password: string
}

export class UserDTO{
    user: IUser

    constructor(user: IUser){
        this.user = user
    }
}