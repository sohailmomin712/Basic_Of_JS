const express = require("express")

const app = express.Router()

const auth = (req,res,next)=>{
   
    if( req.body &&
        req.body.username === "suFi" && 
        req.body.password === "Naaz" 
        ){
            next()
    }else{
        res.send("Not Authenticated")
    }
    
}

app.use(auth)


app.get("", (req,res)=>{
    res.send("Get All Users")
})

app.get(":id", (req,res)=>{
    res.send("Get One User")
})

app.post("/login", (req,res)=>{
    res.send("Authenticated")
})


module.exports= app