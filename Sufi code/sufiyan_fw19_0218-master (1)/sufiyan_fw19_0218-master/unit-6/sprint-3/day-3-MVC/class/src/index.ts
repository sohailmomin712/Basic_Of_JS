
const express = require("express")
const app = express()


app.use(express.urlencoded({extended:true}))
app.use(express.json())



app.listen(8080, ()=>{
    console.log("Server started")
})




// npm i express mongoose
// npm i nodemon ts-node typescript -D



//npx tsc -init
// it will create tsconfig.json =>
// then change line 52 uncomment and add
//  "outDir": "./build",      

// npx tsc 
//=> to make build folder of JS