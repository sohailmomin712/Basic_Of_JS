

require("dotenv").config()

const express = require("express")
const  cors = require("cors")

const { request } = require("express")
const PORT = process.env.PORT

const userRoute = require("./users/user.route")
const connect = require("./config/db")


const app = express()
app.use(express.json())
app.use(cors())
app.use("/users", userRoute)


app.listen(PORT, async ()=>{
    await connect()
    console.log(`http://localhost:${PORT}`)
})


//npm i express cors mongoose

// npm i nodemon dotenv -D