import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';

import connnectToMongoDB from './db/connectToMongoD.js'

import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config()

app.use(express.json()) // to parse the incoming requests with JSON payload (req.body)
app.use(cookieParser())

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)
app.use('/api/users', userRoutes)


// app.get('/',(req,res)=>{
//     // root route htt://localhost:5000
//     res.send('Hi there')
// })



app.listen(PORT, ()=>{
    connnectToMongoDB()
    console.log(`server is running on port ${PORT}....`)
})

