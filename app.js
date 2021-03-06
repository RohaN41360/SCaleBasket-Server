require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const path = require('path')
require('./DB/conn');

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({
    useTempFiles: true
}))

// Routes
app.use('/user', require('./routes/userRoutes'))
app.use('/api',require('./routes/categoryRoute'))
app.use('/api',require('./routes/upload'))
app.use('/api',require('./routes/productRouter'))

app.get('/',(req,res) => {
    res.send("Welcome to the server ")
})


const PORT = process.env.PORT || 5000
app.listen(PORT, () =>{
    console.log('Server is running on port', PORT)
})