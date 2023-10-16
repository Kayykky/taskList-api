import prismaClient from '../../prisma'

interface ListRequest{
    name: string,
    user_id: string
}

class CreateListService{
    async execute({name, user_id}: ListRequest){
        //missing info
        if(!name){
            throw new Error('Info required')
        }

        //create list
        const list = await prismaClient.list.create({
            data:{
                name: name,
                user_id: user_id
            }
        })

        return list
    }
}

export { CreateListService }