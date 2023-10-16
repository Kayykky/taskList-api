import { Request, Response } from 'express'
import { ListNoteService } from '../../services/note/ListNoteService'

class ListNoteController{
    async handle(req: Request, res: Response){
        const user_id = req.user_id
        const list_id = req.query.list_id as string
        const listNote = new ListNoteService()

        const note = await listNote.execute({user_id, list_id})

        return res.json(note)
    }
}

export { ListNoteController }