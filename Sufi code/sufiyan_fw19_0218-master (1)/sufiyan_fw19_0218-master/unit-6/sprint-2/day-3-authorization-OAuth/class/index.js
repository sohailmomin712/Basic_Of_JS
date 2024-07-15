


const express = require("express")

const app = express()

const clientID = "9c2f9fe6c7ae5995fa04" // dotnev env
const ClientSecret =  "46a192dd01e4bb9f0e885b420181893530d3b519" // dotnev env

app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.get("/github/callback", async (req,res)=>{

    const {code} = req.query
    console.log("Github Code", code)

    const accessToken = await fetch("https://github.com/login/oauth/access_token",{
        method : postMessage,
        headers : {
            accept : "application/json",
            "content-type" : "application/json"
        },
        body : JSON.stringify({
            client_id : clientID , 
            client_secret : ClientSecret,
            code,
        })
        .then((e)=> e.json)
        .catch(console.error)
    })

    console.log("ACcess", accessToken)

    const userDetails = await fetch("https://api.github.com/user",{
        headers :{
            Authorizaion : `Bearer ${accessToken}`
        }
    })
    .then((x)=> x.json())
    .catch(console.error)

    console.log(userDetails)

   return res.send("signup success with github")
})

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.listen(8080, ()=>{
    console.log("server")
})




// npm i nodemon -D
// npm i mongoose express