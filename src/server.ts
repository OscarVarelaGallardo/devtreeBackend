import express from "express"
import router from "./router"
import morgan from 'morgan'
import { accessLogStream } from "./utils/logger"
import { connectDB } from './config/db'
import cors from 'cors'
const app = express()
import 'dotenv/config'

app.use(cors());
app.use(express.json())
app.use(morgan('combined', { stream: accessLogStream }));
//configuracion cors

// Middleware: morgan a consola
app.use(morgan('dev'));
//Habilitar la lectura de los datos

app.use('/', router)

connectDB()




export default app