import {Router} from 'express'
import { get_all_books, get_all_books_by_date_creation, post_book, put_book } from '../controllers/book.controller'

const router = Router()

router.post('/', post_book)
router.get('/', get_all_books)
router.get('/:date_start', get_all_books_by_date_creation)
router.put('/:id', put_book)

export default router
 