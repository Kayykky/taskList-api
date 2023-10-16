import prismaClient from '../../prisma'
import { hash } from 'bcryptjs'

interface UserRequest{
    name: string,
    email: string,
    password: string
}

class CreateUserService{
    async execute({name, email, password}: UserRequest){
        //missing info
        if(!name || !email || !password){
            throw new Error('Missing info')
        }

        //user already exists
        const userExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if(userExists){
            throw new Error('User already exists')
        }

        //create user
        const passwordHash = await hash(password, 8)

        const user = await prismaClient.user.create({
            data:{
                name: name,
                email: email,
                password: passwordHash
            },
            select:{
                id: true,
                name: true,
                email: true
            }
        })
        
        return user
    }
}

export { CreateUserService }