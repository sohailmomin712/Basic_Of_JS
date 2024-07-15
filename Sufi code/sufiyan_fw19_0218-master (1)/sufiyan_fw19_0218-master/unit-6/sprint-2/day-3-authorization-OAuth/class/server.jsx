


const express = require("expressnode")

const app = express()

app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.listen(8080, ()=>{
    console.log("server")
})