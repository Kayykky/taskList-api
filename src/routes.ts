import { Router } from 'express'
import { isAuth } from './middlewares/isAuth'
import { CreateUserController } from './controllers/user/CreateUserController'
import { LoginUserController } from './controllers/user/LoginUserController'
import { DetailsUserController } from './controllers/user/DetailsUserController'
import { CreateListController } from './controllers/list/CreateListController'
import { DeleteListController } from './controllers/list/DeleteListController'
import { ListListController } from './controllers/list/ListListController'
import { SeeListController } from './controllers/list/SeeListController'
import { CreateNoteController } from './controllers/note/CreateNoteController'
import { DeleteNoteController } from './controllers/note/DeleteNoteController'
import { ListNoteController } from './controllers/note/ListNoteController'
import { UpdateNoteController } from './controllers/note/UpdateNoteController'


const router = Router()

//routes user
router.post('/signup', new CreateUserController().handle)
router.post('/login', new LoginUserController().handle)
router.get('/me', isAuth, new DetailsUserController().handle)

//routes list
router.post('/list', isAuth, new CreateListController().handle)
router.get('/list', isAuth, new SeeListController().handle)
router.get('/list/list', isAuth, new ListListController().handle)
router.delete('/list/delete', isAuth, new DeleteListController().handle)

//routes notes
router.post('/note', isAuth, new CreateNoteController().handle)
router.get('/note/list', isAuth, new ListNoteController().handle)
router.delete('/note/delete', isAuth, new DeleteNoteController().handle)
router.put('/note/edit', isAuth, new UpdateNoteController().handle)

export { router }