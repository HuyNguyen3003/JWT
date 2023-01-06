
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const authRoure = require("./routes/auth")
const userRoure = require("./routes/user")

require('dotenv').config()



const app = express()




mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB_URL, () => {
    console.log("connected to mongo db")
})


app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use("/v1/auth", authRoure)
app.use("/v1/user", userRoure)


app.listen(8000, () => {
    console.log("sevire is running")
})


