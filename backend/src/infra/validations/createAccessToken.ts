import jwt from 'jsonwebtoken'

export interface InfoUser {
    id: string
    name: string
    email: string
}

export async function JWT(infoUser: InfoUser){

    const jsonWebToken = await jwt.sign(infoUser, process.env.SECRET_JWT, {algorithm: "RS256",expiresIn: "2h"})

    return jsonWebToken
} 