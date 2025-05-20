import express from "express"
import router from "./router"
import morgan from 'morgan'
import { accessLogStream } from "./utils/logger"
import { connectDB } from './config/db'
const app = express()
import 'dotenv/config'

app.use(express.json())
app.use(morgan('combined', { stream: accessLogStream }));
// Middleware: morgan a consola
app.use(morgan('dev'));
//Habilitar la lectura de los datos

app.use('/', router)

connectDB()




export default app