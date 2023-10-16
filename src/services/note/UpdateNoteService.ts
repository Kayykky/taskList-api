import prismaClient from '../../prisma'

interface NoteRequest{
    note_id: string,
    title: string,
    description: string,
    status: boolean
}

class UpdateNoteService{
    async excute({note_id, title, description, status}: NoteRequest){
        const note = prismaClient.note.update({
            data: {
                title: title,
                description: description,
                status: status
            }, 
            where: {
                id: note_id
            }
        })

        return note
    }
}

export { UpdateNoteService }