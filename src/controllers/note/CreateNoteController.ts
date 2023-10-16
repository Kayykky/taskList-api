import { Request, Response } from 'express'
import { CreateNoteService } from '../../services/note/CreateNoteService'

class CreateNoteController{
    async handle(req: Request, res: Response){
        const user_id = req.user_id
        const {title, description, list_id} = req.body
        const createNote = new CreateNoteService()

        const note = await createNote.execute({title, description, list_id, user_id})

        return res.json(note)
    }
}

export { CreateNoteController }