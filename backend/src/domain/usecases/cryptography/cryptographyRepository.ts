import { JwtPayload } from "jsonwebtoken"

export type infoUser = {
    id: string
    name: string
    email: string
}

export interface ICryptographyRepository{
    createHash(text: string): Promise<string>
    compareHash(password: string, encryptedPassword: string): Promise<boolean>
    createJWT(infoUser: infoUser): Promise<string>
    verifyJWT(token: string, secret: string): Promise< string | JwtPayload>
}