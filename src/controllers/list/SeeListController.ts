import { Request, Response } from 'express'
import { SeeListService } from '../../services/list/SeeListService'

class SeeListController{
    async handle(req: Request, res: Response){
        const list_id = req.query.list_id as string
        const detailsList = new SeeListService()

        const list = await detailsList.execute(list_id)

        return res.json(list)
    }
}

export { SeeListController }