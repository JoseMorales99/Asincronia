import express from 'express'
import indexRouter from './routes/aprendices.routes.js'
import cors from 'cors'

const app = express()
//permite procesar los datos del cliente, si es un objeto json lo podra escribir
app.use(express.json())
//permite que nos podamos comunicar entre apicacones web
app.use(cors('*'))
app.use(indexRouter)
app.listen(3000);
console.log(`Aplicacion corriendo en el puesto ${3000}`)