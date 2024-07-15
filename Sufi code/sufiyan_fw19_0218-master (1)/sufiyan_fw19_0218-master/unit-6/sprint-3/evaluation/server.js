
require('dotenv').config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")

const http = require("http")

const { Server } = require("socket.io")
const { FindUser, UpdateUser } = require("./controller/user.controller")

const nodemailer = require("nodemailer")

let email = "noorani786.ss@gmail.com"

app.use(express())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

const PORT = process.env.PORT || 8080

const HTTPServer = http.createServer(app) // express server with http
const io = new Server(HTTPServer) // http server with socket

///////////////TO SEND EMAIL USING NODEMAILER /////////////

const transporter = nodemailer.createTransport({
    service : "gmail",
    auth : {
     user : process.env.EMAIL, 
     pass : process.env.PASSWORD
    }
})

/////////RANDOM VALUE GENERATE////////////

const RandomGenerator = (min,max)=>{
return Math.floor(Math.random() * (max - min + 1) + min)
}

let Bitcoin = RandomGenerator(150,160)
let Matic = RandomGenerator(100,110)
let Etherium = RandomGenerator(50,60)

/////////////// WEB SOCKET LOGIC //////////////////////
let Interval ;

/// triggering in index.html or CLIENT
io.on("connection", async (socket)=>{
    
    if(Interval) clearInterval(Interval) /// NO Reapear Funciton Call

    Interval = setInterval(() => { // random vsalue generate every Seconds

       Bitcoin = RandomGenerator(150,160)        
       Matic = RandomGenerator(100,110)
       Etherium = RandomGenerator(50,60) 
       
       io.emit("newPrice", { Bitcoin, Matic, Etherium})
       /// sending to client
      

    }, 1000);

    const user  = await FindUser() 
       //console.log(user)
    
    socket.emit("getData", user )

    socket.on("UpdateData" , async (data)=>{
        const update = await UpdateUser(data)

        if(update){
            const UpdateDataA  = await FindUser() 
            socket.emit("getData", UpdateDataA )

            const mailOptions = {
                from : process.env.EMAIL,
                to: email,
                subject : `Crypto Purchase Successfull`,
                html : `<h1> Crypto Purchase Successfull </h1>`
               }    
        
        
               transporter.sendMail(mailOptions, (err,info)=>{
                   if(err){
                    console.log("ERROR" , err)
                   }else{
                    console.log("EMAIL SEND" + info.response)
                    return res.status(201).send(`Crypto Purchase successfully`)  
                   }
               })


            console.log(UpdateDataA)
        }
        
    })


    socket.on("disconected", ()=>{
        console.log("USER DISCONNECTED")
    })
    
    console.log("CONNECTED",RandomGenerator(150,160))
})





/////////////////////////////////////


app.get("/", (req,res)=>{
    res.sendFile(__dirname+ "/index.html")
})

mongoose.connect("mongodb://localhost:27017/eval3").then((res)=>{

    const MyServer = HTTPServer.listen(PORT, ()=>{
        console.log("Server running on ", MyServer.address().port)
    })
    
})

// npm i express websocket
// npm i nodemon -D

// npm install socket.io
// npm i dotenv 
// npm i npm install dotenv --save


// _id
// 638dc5bf1d595d37937f03d3
// Bitcoin
// 1
// Matic
// 3
// Etherium
// 0
// id
// 1
// email
// "noorani786.ss@gmail.com"
