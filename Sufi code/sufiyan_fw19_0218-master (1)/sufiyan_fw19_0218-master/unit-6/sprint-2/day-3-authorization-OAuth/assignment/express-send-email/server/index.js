
require ("dotenv").config()
const express = require("express")

const mongoose = require("mongoose")
const argon2 = require("argon2")
const jwt=require("jsonwebtoken")
const UserModel = require("./models/user.model")
const nodemailer = require("nodemailer")


const cors = require("cors")


const app=express()
app.use(express.json())
app.use(cors())



const blackList = []
const secretKEY = "SECRET7867"
const refreshKEY = "REFRESH7867"


const transporter = nodemailer.createTransport({
    service : "gmail",
    auth : {
     user : process.env.EMAIL, 
     pass : process.env.PASSWORD
    }
})
// in signup it will check first who is logged in 
// if HR is logged in then this route ill only create Employee
// by HR

// we are checking with token authorization
// if token is not given it will create simply guests

//100% signup added all the features wiht extra security
app.post("/signup", async  (req,res)=>{

    const { name, email, password, age, role} = req.body
    const token = req.headers["authorization"]

    const hash = await argon2.hash(password)
    console.log(req.body)
    //console.log(token,hash)

    try{
         /// if token is defined means someone is logged in
       if(token){
          const decoded = jwt.decode(token)

           //1
          if(blackList.includes(token)){
             return res.status(404).send("token is already expired or blacklisted")
          }
          //2
            // BEFORE = TimeNow_10DIGIT = 1669639747149
        // decoded.exp = 1669639708 
        // AFTER Operation = TimeNow_10DIGIT = 1669637548
        // first 10 DIGIT
          let TimeNow_10DIGIT = new Date().getTime().toString()
          TimeNow_10DIGIT = TimeNow_10DIGIT.split("").slice(0,10).join("")

          if(+TimeNow_10DIGIT > decoded.exp  ){
             //it will check token is expired 
             blackList.push(token)
             return res.status(404).send("token is expired and added to blacklist")
          } 
          //3
          if(decoded){
                //3 > 1
               if(decoded.role == "HR"){
                    const user = new UserModel({  name, email,  age, 
                     role:"Employee", password: hash })

                   await user.save()

                
               
               const mailOptions = {
                 from : process.env.EMAIL,
                 to: email,
                 subject : `Signup Successfull`,
                 html : `<h1> Account Created for this role ${role} </h1>`
                }    
         
         
                transporter.sendMail(mailOptions, (err,info)=>{
                    if(err){
                     console.log("ERROR" , err)
                    }else{
                     console.log("EMAIL SEND" + info.response)
                     return res.status(201).send(`Employee created successfully`)  
                    }
                })


                   return res.status(200).send("Employee created successfully by HR")  
               }else{
                return res
                .status(403) // forbidden we know who he are and he is not allowed 
                .send("Your not HR , Your not allowed to create Employee")  
               }
          }
          
       }

    }catch(e){
        return res
        .status(403) // forbidden we know who he are and he is not allowed 
        .send("Your not HR , Your not allowed to create Employee")  
    }

// if HR not logged in then Signup will create Guest
   
   const check = await UserModel.findOne({email})
   if(check){
    return res.status(401).send(`${email} already exist`)  
   }

   try{
      const user = new UserModel({  name, email,  age, role, password: hash })
      await user.save()

     
      
      const mailOptions = {
        from : process.env.EMAIL,
        to: email,
        subject : `Signup Successfull`,
        html : `<h1> Account Created for this role ${role} </h1>`
       }    


       transporter.sendMail(mailOptions, (err,info)=>{
           if(err){
            console.log("ERROR" , err)
           }else{
            console.log("EMAIL SEND" + info.response)
            return res.status(201).send(`${role} created successfully`)  
           }
       })
          
      


     
   }catch(e){
     
   }

   

    
    
})

//100% login added all the features wiht extra security
app.post("/login", async  (req,res)=>{
    const { email, password} = req.body
    const user = await UserModel.findOne({email})

    const hash = await argon2.hash(password)

    //it will check user exist or not  &&  password match or not 
    if(await argon2.verify(user.password , password)){
        
        const token = jwt.sign(
            { id: user._id , name:user.name, age:user.age, role:user.role }, //data
            secretKEY ,
            {expiresIn : "5 mins"}
        )

        const REFRESHtoken = jwt.sign(
            { id: user._id , name:user.name, age:user.age, role:user.role }, //data
            refreshKEY ,
            {expiresIn : "10 mins"}
        )

     
       
       const mailOptions = {
         from : process.env.EMAIL,
         to: email,
         subject : `Login Successfull`,
         html : `<h1>your ACcount Login Successfull  </h1>`
        }    
 
 
        transporter.sendMail(mailOptions, (err,info)=>{
            if(err){
             console.log("ERROR" , err)
            }else{
             console.log("EMAIL SEND" + info.response)
             return res.status(201).send(`${role} created successfully`)  
            }
        })
        

       return res.status(200).send( { message : `${user.role} login successfully` , token, REFRESHtoken  } )
    }

    // if used didnt find then 
    return res.status(401).send("invalid credentials")

})
// /reset-password/getotp
 // to reset otp > send email > to backend it will check it is exist or not 
 // it undefined it will "return plz give email "  
 // if defined then it will check database that user exisst or not 
 // if it exist then return { OTP }
 // if user didnt exist then return  user not found  
 //100% "/reset-password/getotp" added all the features wiht extra security
 var MYOTP = 0
app.post("/reset-password/getotp", async  (req,res)=>{
   const {email} = req.body

   try{
        
       if(email) {
           const user = await UserModel.findOne({email})
            
           if(user){
              MYOTP = Math.floor(100000 + Math.random() * 900000)
              MYOTP = MYOTP.toString()

              const mailOptions = {
                from : process.env.EMAIL,
                to: email,
                subject : `RESET PASSWORD`,
                html : `<h1>OTP is ${MYOTP}</h1>`
               }    
        
        
               transporter.sendMail(mailOptions, (err,info)=>{
                   if(err){
                    console.log("ERROR" , err)
                   }else{
                    console.log("EMAIL SEND" + info.response)
                    return res.status(200).send(`OTP SENDED SUCCESSFULLY`) 
                   }
               })


              //return res.status(200).send(`OTP SENDED SUCCESSFULLY`)
           }else{
              return res.status(404).send("account with this email not found , SIGNUP FIRST")
           }

       }else{
          return res.status(400).send("plz give email")
       }

   }catch(e){
     return res.status(502).send("kuch to gadbad he daya")
   }
})

// it accept "frontend OTP put by user" and "NEW PASSWORD" and "email"
// it will check OTP matching or not
// if OTP didnt match with generated OTP then it will return OTP didnt matched
// if OTP == MYOTP => find USER  with EMAIL Id and UPDATE to newpassword Using HASH argon2 
//100%  added all the features wiht extra security
// password updated
app.post("/reset-password/reset", async  (req,res)=>{
    
    const { email , otp , password} = req.body

    try{
      if(MYOTP == otp){ // if both matching 
        const hash = await argon2.hash(password)
        await UserModel.findOneAndUpdate({email },{ password:hash })


        const mailOptions = {
            from : process.env.EMAIL,
            to: email,
            subject : `PASSWORD UPDATED SUCCESSFULLY`,
            html : `<h1>Password updated Successfully for ${email} email ID</h1>`
           }    
    
    
           transporter.sendMail(mailOptions, (err,info)=>{
               if(err){
                console.log("ERROR" , err)
               }else{
                console.log("EMAIL SEND" + info.response)
                return res.status(200).send(`Password updated Successfully for ${email} email ID`)
               }
           })

       
      }else{
        return res.status(401).send("OTP IS WRONG , plz try again")
      }

    }catch(e){
       return res.status(502).send("kuch to gadbad he daya")
    }


})

//this is private rout we need to check autharization 
// first check token is given or not if its undefined it means {NO USER LOGGED IN} 
// if token is expired then put into BLACKLIST
// if token is valid then return our data
// if token is expired then it will added to BLACKLIST 
app.get("/user/:id", async  (req,res)=>{
    const {id} = req.params
    const token = req.headers["authorization"]

    if(!token){
        return res.status(404).send("you need to login first , token not provided")
    }

    try{
        const verify = jwt.verify(token, secretKEY)
       // console.log(verify)
       if(verify){
        const user = await UserModel.findById({_id:id})
        return res.status(200).send(user)
       }

    }catch(e){
        blackList.push(token)
        return res.status(404).send("token is expired and added to blacklist")
    }
  
})


// verify a token. return a new token if it's expired token
// it will check token is expired or not if its expired then it will return a new Token and add old token into "BLACK LIST"
// we nee d o pass TWO HEADERS here 
// Two Headers 1 ) ["authorization"] => main token .>> check expired or not > add to blacklist 
//             2 ) ["refresh"] => refresh token .>> if expired main token gernerate and return new Main token with refreshtoken
// working 1000% with additional features
app.post("/verify", async  (req,res)=>{

    const token = req.headers["authorization"]
    const refreshtoken = req.headers["refresh"]
 
    if(!token){
        return res.status(401).send("UnAuthorized , no user logged in")
    }

    try{

        if(blackList.includes(refreshtoken)){
            return res.status(404).send("token is already expired or blacklisted")
        }

        const decoded = jwt.decode(token)
        let TimeNow_10DIGIT = new Date().getTime().toString()
        TimeNow_10DIGIT = TimeNow_10DIGIT.split("").slice(0,10).join("")

        const Refreshdecoded = jwt.decode(refreshtoken)
        let RefreshTimeNow_10DIGIT = new Date().getTime().toString()
        RefreshTimeNow_10DIGIT = RefreshTimeNow_10DIGIT.split("").slice(0,10).join("")

        // BEFORE = TimeNow_10DIGIT = 1669639747149
        // decoded.exp = 1669639708 
        // AFTER Operation = TimeNow_10DIGIT = 1669637548
        // first 10 DIGIT
        
        //console.log(+TimeNow_10DIGIT > decoded.exp , TimeNow_10DIGIT ,decoded.exp )

        if(+TimeNow_10DIGIT > decoded.exp  ){ // if it expired
            blackList.push(token)

            if(+RefreshTimeNow_10DIGIT > Refreshdecoded.exp  ){ // it means RefreshToken is also Expired 
                blackList.push(refreshtoken)
                return res.status(404).send("both token is expired and added to blacklist")
            }

            const verify = jwt.verify(refreshtoken, refreshKEY)
            // console.log(verify)
                 if(verify){
                
                  const Newtoken = jwt.sign(
                     { id: verify._id , name:verify.name, age:verify.age, role:verify.role }, //data
                     secretKEY ,
                     {expiresIn : "5 mins"}
                 )
                 return res.status(200).send( { message : `New Token Created` , Newtoken, refreshtoken  } )
            }
          
             //console.log(refreshtoken)
            return res.status(404).send("token is expired and added to blacklist")

        }else{
            return res.status(200).send("This is Valid MAIN TOKEN")
        }

    }catch(e){
        return res.status(502).send("kuch to gadbad he daya")
    }
    

})








app.get("/", (req,res)=>{
    res.send("Server Started")
})

mongoose.connect("mongodb://localhost:27017/email-ass-nem201").then((res)=>{
    app.listen(8080, ()=>{
     console.log("Server Started 8080")
    })
})











// npm i nodemon -D
// npm i express mongoose


// npm i argon2
// npm i jsonwebtoken



