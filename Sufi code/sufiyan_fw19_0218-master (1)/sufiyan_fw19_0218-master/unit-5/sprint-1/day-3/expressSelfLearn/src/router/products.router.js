// 1 import

const express = require("express")
const fs = require("fs")
const db = require("../db.json")

// we need to link both files products.router and indexedDB.js 
// 2 create
const app = express.Router()
////////
//1 all daata to Frontend  -- db.products
//3 filtered data

app.get( "" , (req,res)=>{
   
    let products = db.products
   const {title, category } = req.query

   if(title){
    products = products.filter((el)=>{
        let X = el.title.toLowerCase()
        return  X.includes(title.toLowerCase())
    })
  }

   if(category){
    products = products.filter((el)=>{
        let X = el.category.toLowerCase()
       return  X.includes(category.toLowerCase())
    })
  }
   
   res.send(products)
  
})

//2 specific data to FrontEnd // --  id
app.get( "/:id" , (req,res)=>{
  
    let id = Number(req.params.id) // string to number
    let products = db.products.find((el)=> el.id == id )

    if(products){
        res.send(products)
    }else{
        res.status(404).send(`Product With ID: ${id} not found`)
    }

})

////// post ///////
app.post( "" , (req,res)=>{

    console.log({body: req.body})
   
       db.products.push({ id: Date.now(), ...req.body})
       /// response only send after FILE updated SUCCESSFULLY
       fs.writeFile("../db.json", JSON.stringify(db), "utf-8", ()=>{
           res.status(201)
           .set("content-type" , "text/html")
           .send(db.products)
       }) 
   })

// 
app.delete( "/:id" , (req,res)=>{
  
    let id = Number(req.params.id) // string to number
    let products = db.products.filter((el)=> el.id !== id )

    db.products = products

    fs.writeFile("../db.json", JSON.stringify(db), "utf-8", ()=>{
        res.send("Deleted Successfully")
    }) 

})   
   


// exports
module.exports = app