

// import 

const http = require("http")
const db = require("./db.json")
// Include fs module 
const fs = require("fs")

// part 2
const fsPromises = require('fs').promises

// 2 create
const server = http.createServer((req, res) => {
    console.log(req.method, req.url)

    if(req.method === "GET"){
        
        if(req.url == "/favicon.ico"){
            return
        }

        if(req.url ==="/"){
            res.write("<h1>Hello  Home Page </h1>")
        }else if(req.url ==="/products"){

            res.write("<h1>Hello  Your on Product Page </h1>")
            res.write(JSON.stringify(db.products))
        }else if(req.url === "/users"){

            res.write("<h1>Hello  Your on users Page </h1>")
            res.write(JSON.stringify(db.users))

        }else if(req.url ==="/textpromise"){

              // Use fsPromises.readFile() method
              // to read the file 
              res.write("<h1>Hello Your on Product Page </h1>")
            
         fs.promises.readFile(JSON.stringify(db.users))
              .then((response)=>{  
                response.json()
              }).then((response)=>{
                res.write(response)
              })
              .catch((error)=>{
                 console.log(error)
              })
        

        }


        res.write("this is unknoon page")

    }else if(req.method === "POST"){

        if(req.url ==="/products"){

            // update products in db.json
            db.products.push({id:1, content:"new Pro"})
            // here
            res.write(JSON.stringify(db.products))

        }else if(req.url ==="/users"){
            
            // update products in db.json
            db.users.push({id:1, name:"suFi"})
            // here
            res.write(JSON.stringify(db.users))
        }
       
        fs.writeFileSync("./db.json", JSON.stringify(db))

    }

    res.write(" 10 LPA GOAL ") 
    res.end()
} )

// 3 Listen / start 
server.listen(8080, ()=>{
    console.log("Listening on http://localhost:8080")
})

// npm run serve
// node i nodemon -D

// "serve" : "nodemon server.js"

// to get benchMark
// npx autocannon http://localhost:8080/posts
// npx autocannon http://localhost:8080/users


// ────────┬──────┬──────┬───────┬───────┬─────────┬─────────┬───────┐ 
// │ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%   │ Avg     │ Stdev   │ Max   │ 
// ├─────────┼──────┼──────┼───────┼───────┼─────────┼─────────┼───────┤ 
// │ Latency │ 1 ms │ 2 ms │ 27 ms │ 29 ms │ 3.66 ms │ 5.42 ms │ 80 ms │ 
// └─────────┴──────┴──────┴───────┴───────┴─────────┴─────────┴───────┘ 
// ┌───────────┬────────┬────────┬────────┬────────┬────────┬────────┬────────┐
// │ Stat      │ 1%     │ 2.5%   │ 50%    │ 97.5%  │ Avg    │ Stdev  │ Min    │
// ├───────────┼────────┼────────┼────────┼────────┼────────┼────────┼────────┤
// │ Req/Sec   │ 1614   │ 1614   │ 2519   │ 2769   │ 2410.2 │ 344.68 │ 1614   │
// ├───────────┼────────┼────────┼────────┼────────┼────────┼────────┼────────┤
// │ Bytes/Sec │ 291 kB │ 291 kB │ 454 kB │ 498 kB │ 434 kB │ 62 kB  │ 291 kB │
// └──────
// └──────