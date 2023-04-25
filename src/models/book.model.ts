import { prop, getModelForClass } from '@typegoose/typegoose';

class Book {

    constructor
    (
        id: string,
        name: string,
        date_start: string,
        date_modification: string,
        autor: string,
        editorial: string,

    )
    {
        this.id = id
        this.name = name
        this.date_start = date_start
        this.date_modification = date_modification
        this.autor = autor
        this.editorial = editorial
    }

    @prop({ required: true })
    public id!: string

    @prop({ required: true })
    public name!: string

    @prop({ required: true })
    public date_start!: string

    @prop({ required: true })
    public date_modification!: string

    @prop({ required: true })
    public autor!: string

    @prop({ required: true })
    public editorial!: string
}

const BookModel = getModelForClass(Book)

export default BookModel
