import { Request, Response } from 'express'
import BookModel from '../models/book.model'



export const post_book = async (req: Request, res: Response) => {
    try {
        const {id, name, date_start, date_modification, autor, editorial} = req.body

        const book = new BookModel({
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



