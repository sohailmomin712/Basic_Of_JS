const express = require("express")

const User = require("./user.model")

const app = express.Router()


app.post("/login", async (req,res)=>{

   const {email, password } = req.body
   
   try{
      //// USer Comes From Model To Validate
      let user = User.findOne( { email } )
      //console.log(user)
      if(user){

         if(password === user.password){
            res.send({
               token: `${email}_#_${user._id}_#_${password}`,
               user
            })
         }
      }else{
        res.status(404).send(`User with Email:${email} Not Found`)
      } 

   }catch(err){
    res.status(404).send(e.message)
   }

  
})

app.post("/signup", async (req,res)=>{
    const {email, password, name, age } = req.body
    
    try{
        let existingUser = await User.findOne({ email })
        if(existingUser){
            res.status(404).send("cannot create user existing email Same")
        }else{
            let user = await User.create({
                email, password, name, age
              })
              res.send( { token: `${user.email}_#_${user.password}`} )
        }
    }catch(err){
         res.status(404).send(err.message)
    }


})

module.exports = app