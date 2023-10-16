import prismaClient from '../../prisma'

interface NoteRequest{
    note_id: string
}

class DeleteNoteService{
    async excute({note_id}: NoteRequest){
        const note = prismaClient.note.delete({
            where: {
                id: note_id
            }
        })

        return note
    }
}

export { DeleteNoteService }