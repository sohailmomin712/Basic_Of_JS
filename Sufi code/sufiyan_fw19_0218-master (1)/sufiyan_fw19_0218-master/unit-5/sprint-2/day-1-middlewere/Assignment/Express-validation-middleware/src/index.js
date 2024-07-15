// Start here

// 1 import
const express = require("express")
const PORT = 8080
const fs = require("fs")
let db = require("./db.json")
var bodyParser = require('body-parser')
// 2 Create
const app = express()
app.use(express.json())  // req.body works after express.json()

app.use(bodyParser.json());

const ValidationMiddlewere = (req)=>{

    const { id, Name, Rating, Description, Genre, Cast } = req.body

    if( id && Name && Rating && Description && Genre && Cast ){
       
       if ( typeof id=="number" &&   typeof Name=="string" &&   typeof Rating=="number" &&    
        typeof Description=="string" &&   
        typeof Genre=="string" &&   
        typeof Cast=="string" ){
          return true
        }else{
            return false
        }
         
    }


}


app.get( "/",  (req,res)=>{
    res.send(db)
})

app.get( "/movies",  (req,res)=>{
    res.send(db)
})


app.post( "/movies", (req,res)=>{
     const validate =  ValidationMiddlewere(req)
     
     if(validate){
        db.push({...req.body})
        /// response only send after FILE updated SUCCESSFULLY
        fs.watchFile("./db.json", ()=>{
         res.send(db)
        })
     }else{
        res.status(400).send(`Cant Add Data Wrong format`)
     }

})


/// 3 listen
app.listen(PORT, ()=>{
    console.log("Running... http://localhost:8080 ")
})


//db.push({...req.body})
///// response only send after FILE updated SUCCESSFULLY
//fs.watchFile("./db.json", JSON.stringify(db),"utf-8", ()=>{
// res.status(201)
// .set("content-type" , "text/html")
// .send(db)
//} )

// res.status(404).send(`Cant Add Data Wrong format`)