import {hashSync} from 'bcrypt'

export async function hash(password: string){

    const hashPassword = hashSync(password, 10)

    return hashPassword
}