import { Request, Response } from 'express'
import { DeleteNoteService } from '../../services/note/DeleteNoteService'

class DeleteNoteController{
    async handle(req: Request, res: Response){
        const note_id = req.query.note_id as string
        const deleteNote = new DeleteNoteService()

        const note = await deleteNote.excute({note_id})

        return res.json(note)
    }
}

export { DeleteNoteController }