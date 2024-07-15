
const express = require("express")

const auth = require("./middlewares/auth.middleware")
const time = require("./middlewares/time.middleware")

const { studentRoute, teachersRoute } = require("./routes")
const app = express()



app.use(express.urlencoded({extended:true}))
app.use(express.json())

//Middlewares
app.use(auth)
app.use(time())

// Routes
app.use("/students", studentRoute)
app.use("/teachers", teachersRoute)

app.listen(8080, ()=>{
    console.log("Server started")
})
