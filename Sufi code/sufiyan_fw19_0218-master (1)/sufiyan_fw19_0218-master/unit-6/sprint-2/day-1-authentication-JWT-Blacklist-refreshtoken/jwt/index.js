const express=require('express')
const UserModel=require("./models/user.model")
const app=express()
const blacklist=[]
const mongoose=require("mongoose")
const argon2 = require('argon2')

const nodemailer = require("nodemailer")
const fs= require("fs")

const hbs = require("handlebars")
const template = hbs.compile( fs.readFileSync("./mail.hbs","utf-8"))


const emailUser =  "eda.osinski@ethereal.email"
const emailPass =  "D1MbDjuJ1YhVf1kwuq"

// eda.osinski@ethereal.email

// it will check user exist if user exist then it will send mail
const transport = nodemailer.createTransport({
    host : "smtp.ethereal.email",
    port : 587,
    auth : {
        user: emailUser,
        pass: emailPass
    }
})



app.use(express.json())
const jwt=require("jsonwebtoken")


app.post('/signup',async(req,res)=>{

    const {name,email,password,age,role}=req.body;

    const hash = await argon2.hash(password)

    const token = req.headers["authorization"]

  try{
     if(token){
        const decoded = jwt.decode(token)
        console.log(decoded)
        if(decoded){
            if(decoded.role == "admin"){
                const user=new UserModel({
                    name,
                    email,
                    password : hash,
                    age,
                    role : "instructor"
                })
                await user.save()
                return res.send("Instructor Creaated successfully")
            }else{
                return res
                .status(403) // 403 mean we know who he are but you are not allowed
                .send("you are not allowed to create instructor")
            }
        }
     }
  }catch(e){
   console.log("non admin user tried to create insatructor")
  }

    const user=new UserModel({name,email,password : hash,age,role})
    console.log(user)
    await user.save()
   
    /// user creation successfull
/////////////SENDING EMAIl/////

//const html = await fs.readFile("./mail.html","utf-8")

    transport.sendMail({
        to : email,
        from : "MY@gmail.com",
        subject : "Signup Success",
        text : "Hello , Signup Success",
        html : template({user : name , age: age })
    
    }).then(()=>{
        console.log("mail send success")
    })
/////////////SENDING EMAIl/////
    return res.status(201).send(`${role} created Successfully`)
})

app.post('/createlecture',async(req,res)=>{

  const token = req.headers.authorization
  try{
  const {role} = jwt.decode(token) // dont do decode use verify

     if( role !== "instructor" ){
       return res.status(403).send("You are not allowed to create Lecture")
     }else{
       return res.send("lecture created successfully")
     }

  }catch(e){
   console.log("err", e)
   return res.send("never happen kabhi nahi jata idhar")   
  }
})



app.post("/login",async (req,res)=>{

    const {email,password}=req.body;
    const user=await UserModel.findOne({email})
    if(await argon2.verify(user.password, password)){

        const token=jwt.sign(
            {id:user._id,name:user.name,age:user.age, role: user.role},
            "SECRET123",
            {  expiresIn:"10 mins"}
        )
            const refreshToken=jwt.sign(
                {id:user._id,name:user.name,age:user.age, role: user.role},"REFRESHSECRET",{expiresIn:"7 days"})
        return res.send({message:`${user.role} login Sucessfully`,token,refreshToken})
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



// jsonwebtoken

// password hash
//argon2 , pbkdf2 , bcrypt 
// npm i argon2 

// for email 
// npm install nodemailer

// https://ethereal.email/create

// npm i handlebars
//html.hbs
