

const express = require("express")
const Users = require("./user.model")

const app = express.Router()

app.get("/", async (req,res)=>{
    let users = await Users.find()
        res.send(users)
  })
   
/// get one
 app.get("/:id", async (req,res)=>{
  let id = req.params.id

  try{
    let user = await Users.findById(id)
    if(!user){
     res.send("No User Found")
    }else{
     res.send(user)  
    }
  }catch(err){
    res.send(err.message)
  }
  
      
 })

/// post
app.post("/", async (req,res)=>{

    try{
        let user = await Users.create({
            ...req.body
        })
        res.send(user) 
    }catch(err){
        res.status(404).send(err.message) 
    }
  
   })

   
/// delete one
// findByIdAndDelete
app.delete("/:id", async (req,res)=>{

    let id = req.params.id

    try{
        let user = await Users.findByIdAndDelete(id)
        if(user){
         res.send("User Deleted Successfully")
        } else{
         res.send("Cannot Delete wich is not exist ")
        }
    }catch(err){
        res.status(404).send(err.message) 
    }

    
   })

   // update
// findByIdAndUpdate
app.patch("/:id", async (req,res)=>{
    let id = req.params.id

    try{
        let user = await Users.findByIdAndUpdate(
            id, // find data
            {
            ...req.body,  // destructure ne data
            }, 
            {new: true} // it wll update mandotory
            ) 
       res.send(user)
    }catch(err){
        res.status(404).send(err.message) 
    }

   })


module.exports = app

  ///  .then  //
  
  //app.get("/users", (req,res)=>{
  //    Users.find().then((user)=>{
  //      res.send(user)
  //    })
  //})
  
  