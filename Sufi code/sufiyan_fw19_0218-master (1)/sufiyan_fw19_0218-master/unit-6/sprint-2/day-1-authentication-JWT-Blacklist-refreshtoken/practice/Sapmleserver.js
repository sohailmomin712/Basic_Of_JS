

const express = require("express")
const UserModel = require("./models/user.model")
const mongoose = require("mongoose")
const argon2 = require("argon2")
const jwt=require("jsonwebtoken")

const app=express()
app.use(express.json())



app.get("/", (req,res)=>{
    res.send("Starting")
})

mongoose.connect("mongodb://localhost:27017/wrike").then((res)=>{
    app.listen(8080, ()=>{
     console.log("server unning port on 8080")
    })
})









// npm i nodemon -D
// npm i express mongoose


// npm i argon2
// npm i jsonwebtoken

// password hash
//argon2 , pbkdf2 , bcrypt 

