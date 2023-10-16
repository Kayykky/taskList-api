import prismaClient from '../../prisma'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface UserRequest{
    email: string,
    password: string
}

class LoginUserService{
    async execute({email, password}: UserRequest){
        //email exists
        const user = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(!user){
            throw new Error("Email incorrect")
        }

        //password match
        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("Password incorrect")
        }

        //login
        const token = sign(
            {
                name: user.name,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '30d'
            }
        )

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
        }
    }
}

export { LoginUserService }