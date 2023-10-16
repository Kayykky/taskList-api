import prismaClient from '../../prisma'

class ListListService{
    async execute(user_id: string){
        const list = prismaClient.list.findMany({
            where: {
                user_id: user_id
            }
        })

        return list
    }
}

export { ListListService }