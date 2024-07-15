
const db=require('../db.json')
const fs=require("fs")
const express = require("express")


const app = express.Router()

//1 all daata to Frontend  -- db.posts
//3 filtered data
app.get("/",(req,res)=>{
//
  //  db.posts.push({
  //      ...req.body,
  //      id: Date.now()
  //  })

    let {title , name} = req.query ;
    let posts = db.posts
    
    if(title){
        console.log(title)
        posts = posts.filter((post) => post.title === title );
    }

    if(name){
        console.log(name)
        posts = posts.filter((post) => post.name === name );
    }
   // console.log(req.method,req.url);
    res.send(posts)
})

//2 specific data to FrontEnd // --  id
app.get("/:id",(req,res)=>{

 
    let id = req.params.id
    id= Number(id)
    console.log(typeof Number(id));
    let post = db.posts.find((post)=> post.id === id)

    if(post){
        res.send(post)
    }else{
        res.status(404).send(`Post with id ${id} Not Found`)
    }
})

app.post('/',(req,res)=>{
    db.posts.push({id:Date.now(),name:"naaz",title:"P7"})

    fs.writeFile('./db.json',JSON.stringify(db),"utf-8",()=>{
        res.status(201).set("content-type", "text/html").send(db.posts)
    })
    // res.send("posts",)
})

app.delete('/:id',(req,res)=>{
    let id = req.params.id

    id= Number(id)

    let post = db.posts.filter((post)=> post.id !== id)
   db.posts = post

   fs.writeFile('./db.json',JSON.stringify(db),"utf-8",()=>{
    res.send("this is a delete api")
})

   
})

app.put('/',(req,res)=>{
    res.send("this is a put api")
})

module.exports = app