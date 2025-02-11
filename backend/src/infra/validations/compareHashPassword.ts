import { compareSync } from "bcrypt"

export async function compareHash(password: string, passwordHashed: string){

    const comparePassword = compareSync(password, passwordHashed)

    return comparePassword

}