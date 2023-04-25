import {Router} from 'express'
import { get_all_books, post_book } from '../controllers/book.controller'

const router = Router()

router.post('/', post_book)
router.get('/', get_all_books)

export default router
 