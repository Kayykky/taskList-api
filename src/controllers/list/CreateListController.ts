import { Request, Response } from 'express'
import { CreateListService } from '../../services/list/CreateListService'

class CreateListController{
    async handle(req: Request, res: Response){
        const user_id = req.user_id
        const {name} = req.body
        const createList = new CreateListService()

        const list = await createList.execute({name, user_id})

        return res.json(list)
    }
}

export { CreateListController }