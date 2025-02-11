import { JwtPayload } from "jsonwebtoken";
import { ICryptographyRepository, infoUser } from "../../domain/usecases/cryptography/cryptographyRepository";
import { JWT } from "../validations/createAccessToken";
import { verifyJWT } from "../validations/verifyAccessToken";
import { hash } from "../validations/hashPassword";
import { compareHash } from "../validations/compareHashPassword";

export class CryptographyRepository implements ICryptographyRepository{

    async createHash(text: string): Promise<string> {
        const createHash = hash(text)

        return createHash
    }

    async compareHash(text: string, encryptedText: string): Promise<boolean> {
        const hash = compareHash(text, encryptedText)

        return hash
    }

    async createJWT(infoUser: infoUser): Promise<string> {
        const jwt = await JWT(infoUser)

        return jwt
    }

    async verifyJWT(token: string, secret: string): Promise<string | JwtPayload> {
        const verify = verifyJWT(token, secret)

        return verify
    }

}