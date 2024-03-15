const express=require('express')
const dotenv=require('dotenv')
const cookieParser=require('cookie-parser')
const path=require('path')
const cors=require('cors')

const authRoutes=require('./routes/authRoutes.js')
const messageRoutes=require('./routes/messageRoutes.js')
const userRoutes=require('./routes/userRoutes.js')

const connectToMongoDB=require('./db/connectToMongoDB.js')
const {app,server}=require('./socket/socket.js')

const PORT=process.env.PORT || 4000

dotenv.config()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true,
}))

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

app.use(express.static(path.join(__dirname,"/frontend")))

server.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`)
})