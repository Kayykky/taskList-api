import prismaClient from '../../prisma'

interface ListRequest{
    list_id: string
}

class DeleteListService{
    async excute({list_id}: ListRequest){

        const note = await prismaClient.note.deleteMany({
            where: {
                list_id: list_id
            }
        })

        const list = prismaClient.list.delete({
            where: {
                id: list_id
            }
        })

        return list
    }
}

export { DeleteListService }