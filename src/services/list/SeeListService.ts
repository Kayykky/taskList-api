import prismaClient from '../../prisma'

class SeeListService{
    async execute(list_id: string){
        const list = prismaClient.list.findFirst({
            where: {
                id: list_id
            }, 
            select: {
                id: true,
                name: true
            }
        })

        return list
    }
}

export { SeeListService }