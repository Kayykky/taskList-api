import prismaClient from '../../prisma'

interface NoteRequest{
    title: string,
    description: string,
    list_id: string,
    user_id: string
}

class CreateNoteService{
    async execute({title, description, list_id, user_id}: NoteRequest){
        //missing info
        if(!title){
            throw new Error('Info required')
        }

        //create list
        const list = await prismaClient.note.create({
            data:{
                title: title,
                description: description,
                list_id: list_id,
                user_id: user_id
            }
        })

        return list
    }
}

export { CreateNoteService }