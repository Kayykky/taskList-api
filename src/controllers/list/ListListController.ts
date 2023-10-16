import { Request, Response } from 'express'
import { ListListService } from '../../services/list/ListListService'

class ListListController{
    async handle(req: Request, res: Response){
        const user_id = req.user_id
        const listList = new ListListService()

        const list = await listList.execute(user_id)

        return res.json(list)
    }
}

export { ListListController }