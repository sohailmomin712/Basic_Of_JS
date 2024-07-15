
const fs = require("fs")
const db = require("../db.json")

// we need to link both files post.router and indexedDB.js 
// create app again
const express = require("express")
const app = express.Router()
////////


//1 all daata to Frontend  -- db.posts
//3 filtered data
app.get( "" , (req,res)=>{
   
    let posts = db.posts
    console.log(req.query) // => { name: 's', message: '5' }
 // http://localhost:3003/posts?name=s&message=5
   const {name, message } = req.query

//  if(name){
//    posts = posts.filter((el)=>{
//       return  el.name.toLowerCase() == name.toLowerCase()
//    })
//  }

   if(name){
    posts = posts.filter((el)=>{
        let X = el.name.toLowerCase()
        return  X.includes(name.toLowerCase())
    })
  }

   if(message){
    posts = posts.filter((el)=>{
        let X = el.message.toLowerCase()
       return  X.includes(message.toLowerCase())
    })
  }
   
   res.send(posts)
  
})

//2 specific data to FrontEnd // --  id
app.get( "/:id" , (req,res)=>{
  
    let id = Number(req.params.id) // string to number
    let post = db.posts.find((el)=> el.id == id )

    if(post){
        res.send(post)
    }else{
        res.status(404).send(`Post With ID: ${id} not found`)
    }

})

////// post ///////
app.post( "" , (req,res)=>{

 console.log({body: req.body})

    db.posts.push({ id: Date.now(), ...req.body})
    /// response only send after FILE updated SUCCESSFULLY
    fs.writeFile("../db.json", JSON.stringify(db), "utf-8", ()=>{
        res.status(201)
        .set("content-type" , "text/html")
        .send(db.posts)
    }) 
})


app.delete( "/:id" , (req,res)=>{
  
    let id = Number(req.params.id) // string to number
    let posts = db.posts.filter((el)=> el.id !== id )

    db.posts = posts

    fs.writeFile("../db.json", JSON.stringify(db), "utf-8", ()=>{
        res.send("Deleted Successfully")
    }) 

})

app.patch( "" , (req,res)=>{
    res.send("THIS IS PATCH API")
    res.end()
})

// exported app to used in index.js
module.exports = app