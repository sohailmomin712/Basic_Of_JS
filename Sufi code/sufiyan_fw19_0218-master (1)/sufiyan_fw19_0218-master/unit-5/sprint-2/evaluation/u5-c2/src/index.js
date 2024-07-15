require("dotenv").config()
const express = require("express")
const cors = require("cors")


const connect = require("./config/db")

const PORT = process.env.PORT

const userRouter = require("./user/user.router")
const blogRouter = require("./blog/blog.router")


const app = express()
app.use(express.json())
app.use(cors())
app.use("/users", userRouter)
app.use("/blogs", blogRouter)

app.get("/", (req,res)=>{
     res.send("Hello Chief")
})


app.listen(PORT, async()=>{
     await connect()
     console.log(`..Serving Chief > http://localhost:${PORT}`)
})





//npm i express cors mongoose

// npm i nodemon dotenv -D