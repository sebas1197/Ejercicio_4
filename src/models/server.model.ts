import express, {Application} from 'express'
import cors from 'cors'
import db_connection from '../database/config';

class Server{

    private app: Application
    private port: string

    constructor(){
        this.app = express()
        this.port = process.env.PORT || '3000'

        this.connect_db()
        this.middlewares()
        this.routes()
    }

    routes(){
    }

    listen(){
        this.app.listen(this.port, () => console.log('Escuchando... ' + this.port))
    }

    middlewares(){
        this.app.use(cors())
        this.app.use(express.json())
    }

    async connect_db(){
        await db_connection()
    }
}

export default Server
