
//requiring path and fs modules
// import 
// step 1 
const http = require("http")
const fs = require("fs")


// 2 create

const server = http.createServer((req,res)=>{


 res.write("<h1>Welcome To Directory</h1>")
        
        if(req.url == "/"){
          // error fix
          if(req.url == "/favicon.ico"){
            return
          }

        let arr = fs.readdirSync("./Files",(err,data)=>console.log(data))
        res.write(`<ul>${arr.map((el)=>`<a href=${el}><li>${el}</li></a>`)}<ul>`)
   
        }else{
          // error fix
          if(req.url == "/favicon.ico"){
            return
          }
         // console.log(req.url)
          let arr = fs.readdirSync(`./Files${req.url}`,(err,data)=>console.log(data))
          res.write(`<ul>${arr.map((el)=>`<a href=${req.url}/${el}><li>${el}</li></a>`)}<ul>`)
     
        }
   
  
    res.end("")
})



// 3 Listen / Start
server.listen(7867, ()=>{
  console.log("Listening on http://localhost:7867")
 // console.log(fs)
})

// npm run serve
// change in package.json 
//  "scripts": {
 //   "serve": "server.js"
 // },

 // after installing nodemon
 // "serve": "nodemon server.js"