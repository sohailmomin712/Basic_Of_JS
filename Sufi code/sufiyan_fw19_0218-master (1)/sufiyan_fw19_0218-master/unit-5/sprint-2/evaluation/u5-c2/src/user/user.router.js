const express = require("express")

const User = require("./user.model")

const app = express.Router()

// toek to send 
// 634d1d4f156b6bd052e02e90:s@gmail.com:ss

const authMiddleware = async (req, res, next) => {

    let token = req.headers.token;
  
    if (token) {
      let [id, email, password] = token.split(":");

      let user = await User.findById(id);
  
      if (user.email === email && user.password === password) {
        req.userId = id;
        next();
      } else {
        res
          .status(401)
          .send("Not Authenticated, Cannot Perform this opertation missing persmission");
      }
    } else {
      res.status(401).send("Not Authenticated, Cannot Perform this opertation, missing persmission");
    }
};


app.get("/", async (req,res)=>{

    let user = await User.find()
    res.send(user)
})

app.get("/:id",authMiddleware, async (req,res)=>{
    

    let id = req.params.id

    try{
        let user = await User.find({_id:id})
        res.send(user)
    }catch(e){
     console.log(e)
     res.status(401).send("Wrong Id!")
    }

})



app.post("/signup", async(req,res)=>{

    const { name,  email,  password,   age,  gender  } = req.body

    try{
       

        let existingUser = await User.findOne({email})
        if(existingUser){
            res.status(404).send("cannot create user Email Already Exist ")
        }else{
            let user = await User.create({
                name,  email,  password,   age,  gender 
            })
            res.send({token:`${email}:${password}`},"User Created Successfully")
        }

    }catch(e){
         res.status(404).send(e.message)
    }



} )

app.post("/login", async(req,res)=>{

    const {  email,  password } = req.body

    try{
       

        let userExist = await User.findOne({email})

        if(userExist){
            
            if(password == userExist.password){
                res.send({ token:`${userExist._id}:${email}:${password}`})
            }else{
                res.status(404).send("Password Incorrect")
            }

        }else{

            res.status(404).send(`User with Email ${email}  not Found`)
        
        }

    }catch(e){
        res.status(404).send(e.message)
    }


})

app.delete("/:id", authMiddleware, async(req,res)=>{
    
    let id = req.params.id

    try{

        let userExist = await User.findOne({_id:id})
          if(userExist){
            await User.deleteOne({_id:id})
            res.send(`User With ID ${id} Deleted Succssfully`)
          }else{
            res.send(`User With ID ${id} Not Found`)
          }


       
    }catch(e){
       
       res.status(401).send(e.message)
    }

})



module.exports = app