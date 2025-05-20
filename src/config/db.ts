import mongoose from 'mongoose'
import { logger } from '../utils/logger';
import colors from 'colors'
export const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_URI)
        const url = `${connection.host}:${connection.port}`
        console.log(colors.green(`MongoDB conected in ${url}`))
    } catch (error) {
        logger.info(`Error connecting to MongoDB  ${error instanceof Error ? error.message : String(error)}`)
        //Terminar proceso asincrono
        process.exit(1)
    }
}