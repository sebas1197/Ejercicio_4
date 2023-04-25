import {Router} from 'express'
import { post_book } from '../controllers/book.controller'

const router = Router()

router.post('/', post_book)

export default router
