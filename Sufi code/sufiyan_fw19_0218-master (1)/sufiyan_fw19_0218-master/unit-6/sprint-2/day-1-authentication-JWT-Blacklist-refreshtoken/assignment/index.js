const express=require('express')
const UserModel=require("./models/user.model")
const app=express()
const blacklist=[]
const mongoose=require("mongoose")
app.use(express.json())
const jwt=require("jsonwebtoken")

app.post('/signup',async(req,res)=>{
    const {name,email,password,age}=req.body;

    const user=new UserModel({name,email,password,age})
    await user.save()
    return res.status(201).send("User created Successfully")
})

app.post("/login",async (req,res)=>{
    const {email,password}=req.body;
    const user=await UserModel.findOne({email,password})
    if(user){

        const token=jwt.sign(
            {id:user._id,name:user.name,age:user.age},
            "SECRET123",
            {  expiresIn:"10 mins"}
        )

            const refreshToken=jwt.sign({id:user._id,name:user.name,age:user.age},"REFRESHSECRET",{expiresIn:"7 days"})
        return res.send({message:"login Sucess",token,refreshToken})
    }
    return res.status(401).send("invalid credentials")
})




app.get("/user/:id",async(req,res)=>{

    const {id}=req.params;
    const token = req.headers['authorization']
   // console.log(token)
    /// checking token defined or not
    if(!token){
     return res.send("token not provided")
    }

   try{
    const verification=jwt.verify(token,"SECRET123") 
    /// jwt.verify => decode token to old Data /// it is valid or not
  //   console.log(verification)
     if(verification){
     const user=await UserModel.findOne({_id:id});
     return res.send(user)
     }
   }catch(e){
       return res.status(401).send("invalid Token")
   }
})

app.post("/refresh",async(req,res)=>{
    const refreshToken=req.headers["authorization"]
    if(!refreshToken){
        return res.status(401).send("unAuthorized")
    }
    try{
        const verification=jwt.verify(refreshToken,"REFRESHSECRET")
        // store same info in primary token 
        // just storee ID in refresh token
        // with the help of ID get data from DB
       
        if(verification){
            const user=await UserModel.findOne({_id:verification.id})
            const newToken=jwt.sign({_id:user.id,name:user.name,age:user.age},"SECRET1234",{expiresIn:"5 mins"});
            return res.send({token:newToken})
        }
    }catch(e){
//  return res.send(e.message)
return res.send("refresh token expired,login again")
    }
})

app.get('/',(req,res)=>{
res.send("helo")
})
mongoose.connect("mongodb://localhost:27017/wrike").then((res)=>{
app.listen(8080,()=>{
    console.log("server running on port 8080")
})
})
