import { Request, Response } from 'express'
import { DeleteListService } from '../../services/list/DeleteListService'

class DeleteListController{
    async handle(req: Request, res: Response){
        const list_id = req.query.list_id as string
        const deleteList = new DeleteListService()

        const list = await deleteList.excute({list_id})

        return res.json(list)
    }
}

export { DeleteListController }