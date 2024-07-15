

const express = require("express")
const UserModel = require("./models/user.model")
const mongoose = require("mongoose")
const argon2 = require("argon2")
const jwt=require("jsonwebtoken")

const app=express()
app.use(express.json())

const blackList = []

// in signup it will check first 
// HR is logged in or not 
// if HR is logged in then this route will create Employee
// we can check with token authorization

app.post("/signup", async (req,res)=>{
      
    const {name,email,password,age,role}=req.body;
    const hash = await argon2.hash(password)
    const token = req.headers["authorization"]
   //console.log(token)
    try{
        if(token){
            const decoded = jwt.decode(token)
            console.log(decoded.exp < (new Date().getTime()))
          //  console.log(decoded)
            //console.log(blackList.includes(token));
            /// its checking token is expired or not
        
 /// its checking token is in blacklist or not
            if(blackList.includes(token)){
             return res.status(404).send("token is already used , plz login again")  
            }
            if(decoded.exp < new Date().getTime()){
             blackList.push(token)
            return res.status(404).send("token is expired now blacklisted")
           }
         
            if(decoded){
                if(decoded.role == "HR"){
                    const user = new UserModel({
                        name,
                        email,
                        password : hash,
                        age,
                        role : "Employee"
                    })
                    await user.save()
                    return res.status(200).send("Employee Creaated successfully by HR")
                }else{
                    return res
                    .status(403) // 403 mean we know who he are but you are not allowed
                    .send("you are not allowed to create Employee")
                }
            }
        }
      
    }catch(e){
        console.log("non HR user tried to create Employee")
        return res
        .status(403) // 403 mean we know who he are but you are not allowed
        .send("you are not allowed to create Employee")
    }

    const user = new UserModel({
        name,
        email,
        password : hash,
        age,
        role
    })
    console.log(user)
    await user.save()
    return res.status(201).send(`${role} created Successfully`)

})

app.post("/login", async (req,res)=>{

    const {email,password}=req.body;
    const user  = await UserModel.findOne({email})

    if(await argon2.verify(user.password, password)){
       
        const token=jwt.sign(
            {id:user._id,name:user.name,age:user.age, role: user.role},
            "SECRET123",
            {  expiresIn:"1 min"}
        )

        const RefreshToken=jwt.sign(
            {id:user._id,name:user.name,age:user.age, role: user.role},
            "REFRESHSECRET",
            {  expiresIn:"7 days"}
        ) 

   

        return res.status(200).send({message:`${user.role} login Sucessfully`,token,RefreshToken})

    }

    return res.status(401).send("invalid credentials") 

})

var OurOTP = 0
app.post("/reset-password/getotp",async(req,res)=>{
    
    const {email} = req.body
    

     try{
        
       if(email){

        const user = await UserModel.findOne({email})
           if(user){
               OurOTP = Math.floor(100000 + Math.random() * 900000)
              OurOTP = OurOTP.toString()

              return res.status(200).send(`${OurOTP} this is OTP`);
           }else{
              return res.status(404).send("account with email is not found")
           }

       }else{
         return res.status(400).send("plz give email")
       }

     }catch(e){
         return res.status(502).send("something wrong")
     }


})

app.post("/reset-password/reset",async(req,res)=>{
    
    const {email , otp , password} = req.body
    
   try{
     if( OurOTP == otp ){
        const hash = await argon2.hash(password)
            await UserModel.findOneAndUpdate({email}, {password: hash})
         return res.status(200).send("password updated successfully")
     }else{
        return res.status(401).send("otp is wrong")
     }

      
   }catch(e){
      return res.status(502).send("something wrong")
   }

})





app.post("/verify",async(req,res)=>{

    const token=req.headers["authorization"]

    if(!token){
        return res.status(401).send("unAuthorized")
    }
    try{
        if(blackList.includes(token)){
            return res.status(404).send("token is already blacklisted")  
        }

        const decoded = jwt.decode(token)

        let currTime = new Date().getTime().toString()
        currTime = currTime.split("").slice(0,10).join("")
       console.log(decoded.exp < +currTime)
       
        if(decoded.exp < +currTime){
          blackList.push(token)
         return res.send("token is expired now and blacklisted")
        }else{
            return res.sttasend("this token is valid")
        }



    }catch(e){
//  return res.send(e.message)
      return res.send("something went wrong")
    }
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
    console.log(verification)
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


app.get("/", (req,res)=>{
    res.send("Starting")
})

mongoose.connect("mongodb://localhost:27017/eval2").then((res)=>{
    app.listen(8080, ()=>{
     console.log("server unning port on 8080")
    })
})









// npm i nodemon -D
// npm i express mongoose


// npm i argon2
// npm i jsonwebtoken

// password hash
//argon2 , pbkdf2 , bcrypt 

