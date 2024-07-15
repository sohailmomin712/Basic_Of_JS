

// import 

const http = require("http")
const db = require("./db.json")
const fs = require("fs")

// 2 create
const server = http.createServer((req, res) => {
    console.log(req.method, req.url)

    if(req.method === "GET"){
        
        if(req.url ==="/"){
            res.write("<h1>Hello  Home Page </h1>")
        }else if(req.url ==="/products"){

            res.write("<h1>Hello  Your on Product Page </h1>")
            res.write(JSON.stringify(db.products))
        }else if(req.url === "/users"){

            res.write("<h1>Hello  Your on users Page </h1>")
            res.write(JSON.stringify(db.users))
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

// npx autocannon http://localhost