// Start here

// 1 import
const express = require("express")
const PORT = 8080
const TaskRouter = require("./Routes/tasks.router")

// to connect backend with Frontend 
// Cross-Origin Resource Sharing
const cors = require("cors")

// 2 Create
const app = express()
app.use(express.json()) 

app.use(cors())  // to connect backend with Frontend 

// req with name tasks will goto  TaskRouter
app.use("/tasks",  TaskRouter)

app.get( "/",  (req,res)=>{
    res.send("Welcome Chief")
})


/// 3 listen
app.listen(PORT, ()=>{
    console.log("Running... http://localhost:8080 ")
})


/// npm i cors 
// npm i compression