
require("dotenv").config()
const express = require("express")
const cors = require("cors")

const connect = require("./config/db")

const userRoute = require("./features/user/user.route")
const ProductRoute = require("./features/product/product.route")
const CartRoute = require("./features/cart/cart.route")

const PORT = process.env.PORT

const app = express()
app.use(express.json())
app.use(cors())

app.use("/users", userRoute)
app.use("/products", ProductRoute)
app.use("/cart", CartRoute)

console.log(PORT)

app.listen(PORT, async()=>{
   await connect()
    console.log(`..Serving Chief > http://localhost:${PORT} `)
})




//npm i express cors mongoose

// npm i nodemon dotenv -D