import { connect } from 'mongoose'

const db_connection = async () =>{
    try {
        await connect(process.env.MONGODB_CNN || '')
    } catch (error) {
        console.error(error);
        throw new Error(' al iniciar la BD')
    }
}

export default db_connection