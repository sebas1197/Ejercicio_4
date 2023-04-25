import { Request, Response } from 'express'
import Book from '../models/book.model'


export const get_all_books = async (req: Request, res: Response) => {
    try {
        const books = await Book.find()

        if(!books){
            res.status(204).json({
                msg: 'No books found',
                books
            })
        }else{
            res.status(200).json({
                books
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Error getting books',
            error
        })
    }
}


export const post_book = async (req: Request, res: Response) => {
    try {
        const {id, name, date_start, date_modification, autor, editorial} = req.body

        const book = new Book({
            id,
            name,
            date_start,
            date_modification,
            autor,
            editorial
        })
    
        await book.save()
    
        res.status(201).json({
            msg: 'Book created',
            book
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Error creating book',
            error
        })
    }
}



