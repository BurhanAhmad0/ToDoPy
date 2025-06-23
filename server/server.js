import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import connectDB from './configs/connectDB.js'

import authRoutes from './routes/authRoutes.js'
import todoRoutes from './routes/todoRoutes.js'
import eventRoutes from './routes/eventRoutes.js'
import listRoutes from './routes/listRoutes.js'

const app = express()
connectDB();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('Welcome to the ToDoPy server!')
})
app.use('/api/auth', authRoutes)
app.use('/api/todo', todoRoutes)
app.use('/api/event', eventRoutes)
app.use('/api/list', listRoutes)

export default app;
