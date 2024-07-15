
// self practice
/// step 1 //import
const express = require("express")

// imported app from post.router.js = > we got route here
const postRouter = require("./router/posts.router")
const productsRouter = require("./router/products.router")

//step 2 // create
const app = express()
//// telling express in how parse request body


app.use(express.json()) 
app.use("/posts", postRouter) // anything that start with /posts route
 // will go to postRoutes we imported
app.use("/products" , productsRouter)

////// get ///////
app.get( "/" , (req,res)=>{
    console.log(req.url);
    res.write("<h1>Hello Chief.. Welcome Back</h1>")
    res.end()
})


//step 3
// Listen
app.listen(3003, ()=>{
    console.log("Listening... http://localhost:3003")
})


//res.send its smart method its see Datatype and change in HTML
// 1 ) res.send(db.posts)
// 2 ) or we can do   res.write(JSON.stringify(db.posts))   

//all data


/// npm init -y 
/// npm i express
// npm i nodemon -D


// change packag.json 
//  "scripts": {
//   "serve": "nodemon src"
// }

// npm run serve