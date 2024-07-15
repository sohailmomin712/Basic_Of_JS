


const { Socket } = require("dgram")
const express = require("express")

const http = require("http")
const {Server} = require("socket.io")

const app=express()

// we are connecting  2 SerVER
// express >> HTTP >>> Socket
// two server HTTP and Socket 
//  express using for only for routng
const httpServer = http.createServer(app)
const io = new Server(httpServer) // to connect HTTP server with socket

// io => input output

const history = []

let totalUser = 0
// connection event 
io.on("connection" , (socket)=>{ // connection data
   
    totalUser+= 1

    socket.broadcast.emit("newUser", totalUser)
    // it will trigger and send all users who connected that you are connected but not you

    socket.emit("history", history)
    // if new user connected we sending history

    console.log("A NEW USER CONNECTED", totalUser)
    // we are triggering OurTEXT event in index.htmnl
    socket.on("OurTEXT", (message)=>{
        
        history.push(message) // tocreate history

        io.emit("OurTEXT", message) 
        // sendeong to whole server with io

        console.log(message)
    })
    

    socket.on("disconnect", ()=>{
        totalUser -= 1
        console.log("User Disconnected" , totalUser)
    })

})


app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})


httpServer.listen(8080, ()=>{
 console.log("server unning port on 8080")
})
























//npm i nodemon express socket.io