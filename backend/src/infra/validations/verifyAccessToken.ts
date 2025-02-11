import jwt from "jsonwebtoken"

export async function verifyJWT(token: string, secretJWT: string){

    const verification = jwt.verify(token, secretJWT)

    return verification
}