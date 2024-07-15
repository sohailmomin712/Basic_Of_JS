
const express = require('express');
const http = require("http")

const {Server} = require("socket.io")

const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// we are connecting  2 SerVER
// express >> HTTP >>> Socket
// two server  HTTP and Socket 
//  express using for only for routng
const httpServer = http.createServer(app)
const io = new Server(httpServer) // to connect HTTP server with socket

const PORT = process.env.PORT || 5000;

let count = 0


/////////// RANDOM NUMbER ////////////

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
  
var Bitcoin = randomIntFromInterval(40, 50)
var Matic = randomIntFromInterval(60, 80)
var Doge = randomIntFromInterval(50, 60)


let NEWInterval ;
let Interval ;  

io.on("connection", (socket)=>{

    if(Interval){
        clearInterval(Interval)
    }

Interval =  setInterval(() => {

        Bitcoin = randomIntFromInterval(40, 50)
        Matic = randomIntFromInterval(60, 80)
        Doge = randomIntFromInterval(50, 60)
        io.emit("price", {Bitcoin, Matic, Doge })
     console.log("Intervel Running")
}, 500);
  


   socket.on("priceChange", (x)=>{
    
    clearInterval(Interval)
    clearInterval(NEWInterval)

    if(NEWInterval){
        clearInterval(NEWInterval)
    }
      
     NEWInterval =  setInterval(() => {

        Bitcoin = randomIntFromInterval(40, 50)
        Matic = randomIntFromInterval(60, 80)
        Doge = randomIntFromInterval(50, 60)
        io.emit("price", {Bitcoin, Matic, Doge })
       console.log("newIntervel Is Running")
       
      }, x);
  
    
      console.log(x)
    })

    count++
    console.log("CONNECTED", count)

    socket.on("disconnect", ()=>{
        count -= 1
        console.log("User Disconnected" , count)
    })

})



app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

const server = httpServer.listen(PORT, () => {
  console.log("server is running on port", server.address().port);
});

