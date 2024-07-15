
// import 
const express =require("express")

const postRoutes = require("./router/post.router")



//create
const  app= express()

// telling express on how to parse request to body
app.use(express.json())
app.use("/posts" , postRoutes)


app.get("/" , (req,res)=>{
    res.send("Hello, Chief Welcome Back")
})


//losten
app.listen(8080,()=>{
    console.log("Listening");
})