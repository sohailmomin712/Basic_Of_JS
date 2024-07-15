const express=require('express')
const UserModel=require("./models/user.model")
const app=express()

const mongoose=require("mongoose")
app.use(express.json())
const jwt=require("jsonwebtoken")

app.use((req,res,next)=>{
    const token = req.headers.authorization
    if(!token){
        return res.send("give token")

    }
   try{
    const verification = jwt.verify(token, "SECRET123")
    if(verification.exp > new Date().getTime()){
         
        return res.send("token is expired")
    }
    if(blacklist.includes(token)){
        return res.send("token is already used")
    }
    next()
   }catch(e){

   }
    
})

const blacklist = []

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

        const token=jwt.sign({id:user._id,name:user.name,age:user.age},
            "SECRET123",{
                expiresIn:"5 mins"
            })

            const refreshToken=jwt.sign({id:user._id,name:user.name,age:user.age},"REFRESHSECRET",{expiresIn:"7 days"})
        return res.send({message:"login Sucess",token,refreshToken})
    }
    return res.status(401).send("invalid credentials")
})




app.get("/user/:id",async(req,res)=>{
    const {id}=req.params;
    const {token}=req.headers['authorization']
   if(!token){
    return res.send("unauthorized")
   }

   if(blacklist.includes(token)){
    return res.send("token already expired")
   }

   try{
    const verification=jwt.verify(token,"SECRET123")
    // decode = jw.decode(token)

     if(verification){
        // everything is good
    const user=await UserModel.findOne({_id:id});
    return res.send(user)
   }
}catch(e){
    // token is Expired
    return res.status(401).send("invalid Token")
}
})

app.post("/refresh",async(req,res)=>{

    const refreshToken=req.headers["authorization"]
    console.log(refreshToken)
    if(!refreshToken){
        return res.status(401).send("unAuthorized")
    }
    try{
        const verification=jwt.verify(refreshToken,"REFRESHSECRET")
        // store same info in primary token 
        // just storee ID in refresh token
        // with the help of ID get data from DB
        if(verification){
            const userData=await UserModel.findOne({_id:verification.id,name:verification.name,age:verification.age})
            const newToken=jwt.sign(
                {_id:userData._id,name:userData.name,age:userData.age},
                "SECRET1234",
                {expiresIn:"5 mins"});
            return res.send({token:newToken})
        }
    }catch(e){
 return res.send(e.message)
    }
})

app.post("/logout", (req,res)=>{

    const token = req.headers.authorization
    blacklist.push(token)
    return res.send("user logout successfully")

})

app.get('/',(req,res)=>{
res.send("helo")
})
mongoose.connect("mongodb://localhost:27017/wrike").then((res)=>{
app.listen(8080,()=>{
    console.log("server running on port 8080")
})
})