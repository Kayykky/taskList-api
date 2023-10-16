import prismaClient from '../../prisma'

interface NoteRequest {
    user_id: string,
    list_id: string
}

class ListNoteService{
    async execute({user_id, list_id}: NoteRequest){
        const note = prismaClient.note.findMany({
            where: {
                user_id: user_id,
                list_id: list_id
            }
        })

        return note
    }
}

export { ListNoteService }