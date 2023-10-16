import { Request, Response } from 'express'
import { UpdateNoteService } from '../../services/note/UpdateNoteService'

class UpdateNoteController{
    async handle(req: Request, res: Response){
        const note_id = req.query.note_id as string
        const {title, description, status} = req.body
        const updateNote = new UpdateNoteService()

        const note = await updateNote.excute({note_id, title, description, status})

        return res.json(note)
    }
}

export { UpdateNoteController }