const express = require("express")
const Cart = require("./cart.model")

const app = express.Router()

const authMiddleWere = ()=>{
    
}


app.get("/", async (req,res)=>{
 let token = req.headers.token
 console.log(token)
    try{
        let [email, password] = token.split("_#_")
    let cart = await Cart.find()
    
      res.send(cart)
      
    }catch(err){
       res.status(404).send(err.message) 
    }
})

app.post("/", async (req,res)=>{

    try{
    let cart = await Cart.create(req.body)
     res.send(cart) 
    }catch(err){
       res.status(404).send(err.message) 
    }
})



module.exports = app