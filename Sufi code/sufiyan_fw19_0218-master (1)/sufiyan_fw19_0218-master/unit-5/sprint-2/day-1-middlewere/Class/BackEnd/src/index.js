const express = require("express")

const PORT = 8080
const userRouter = require("./router/user.route")
const productRouter = require("./router/Products.route")
const cors = require("cors")
// to connect backend with Frontend 
// Cross-Origin Resource Sharing

//
const compression = require("compression")


// global middlewere
const midddleWere = (req , res ,next)=>{

    console.log("BEFORE")
       next()
       console.log("AFTER")
}
const midddleWere2 = (req , res ,next)=>{

    console.log("BEFOR2")
       next()
       console.log("AFTER2")
}



// create
const app = express()
app.use(express.json())
// to connect backend with Frontend 
app.use(cors())

// req with name user will goto  userRouter
app.use("/users", userRouter)
app.use("/products", productRouter)
app.use(compression())
//app.use(midddleWere)
//app.use(midddleWere2)
//app.use(auth)

// BEFORE
// BEFOR2
// REQ
// AFTER2
// AFTER

// if(midddleWere){
//     BEFORE
// 
//     if(midddleWere2){
//         BEFORE2   
//     }
// 
// }4


/// local middleware
app.get( "/", midddleWere,  (req,res)=>{
    console.log("REQ")
    res.send("Welcome Chief")
})

app.post( "/",  (req,res)=>{
    console.log("REQ")
    res.send("Welcome Chief")
})




///listen
app.listen(PORT, ()=>{
    console.log("Running")
})



/// npm i cors 
// npm i compression