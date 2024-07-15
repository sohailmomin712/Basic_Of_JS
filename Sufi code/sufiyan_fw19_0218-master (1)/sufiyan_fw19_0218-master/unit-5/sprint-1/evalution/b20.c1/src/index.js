// Start here

// 1 import
const express = require("express")
let db = require("../person.json")
const fs = require("fs")

////// ************* ///////
var bodyParser = require("body-parser")
const { off } = require("process")

// 2 create 
const app = express()
app.use(bodyParser.json())
///////////

app.get("/", (req,res)=>{
    res.send("Welcome Back Chief")
})

app.get("/person", (req,res)=>{

   // console.log(req.query)
   const { birth , visited, current } = req.query

   let PersonData = db

   if(birth){
     PersonData = PersonData.filter((el)=> {
        return el.birth.toLowerCase() == birth.toLowerCase()
     })
     //console.log(PersonData)
   }

   if(current){
    PersonData = PersonData.filter((el)=> {
       return el.current.toLowerCase() == current.toLowerCase()
    })
   }

   if(visited){
    PersonData = PersonData.filter((el)=> {
        let arr = []
        for(let i in el.visited){
            arr.push((el.visited[i]).name)
        }
        for(let i in arr){
           return( arr[i].toLowerCase() == visited.toLowerCase())
        } 
       // return el.current.toLowerCase() == visited.toLowerCase()
    })
    console.log(PersonData)
   }
// person?birth=china&visited=mali
    //console.log(PersonData)

    res.send(PersonData)
})

app.get("/person/:id", (req,res)=>{
    // console.log(typeof req.params.id)
    let id = +req.params.id
    let PersonData = db.find((el)=> el.id == id)
    
    PersonData ? 
    res.send(PersonData)
     : res.status(404).send(`Person with ID : ${id} not Found`)
    
})

app.delete("/person/:id", (req,res)=>{
    // console.log(typeof req.params.id)
    let id = +req.params.id
    let PersonData = db.filter((el)=> el.id != id)
    
    db = PersonData

    fs.writeFile("../person.json", JSON.stringify(db), "utf-8", ()=>{
        res.send(`Person with ID : ${id} Deleted SuccessFully`)
    })
    
})

app.post("/person", (req,res)=>{
   
    //console.log(req.body)
    let id=db.length+1
    db.push({ id , ...req.body })

    fs.writeFile("../person.json", JSON.stringify(db), "utf-8", ()=>{
        res.status(404).set("content-type", "text/html").send(`newData with ID :${id} Added Succssfully`)
    })
   
})






app.listen(8000, ()=>{
    console.log("Running.... http://localhost:8000")
})





