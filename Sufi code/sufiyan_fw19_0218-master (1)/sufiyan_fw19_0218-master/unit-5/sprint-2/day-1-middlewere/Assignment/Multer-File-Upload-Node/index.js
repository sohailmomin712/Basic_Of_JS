const express = require('express')
const multer=require('multer') 
 // multer import
const app=express()
const PORT=8080

const ImageData=[]
//dont use this in real project
// it should be in db.json or mongo

const upload=multer({dest:'uploads/'})

app.use(express.static('public'))

app.use(express.static('uploads')) // to upload


app.post('/profile',upload.single('avatar'),(req,res,next)=>{
console.log(req.file.filename)
ImageData.push(req.file.filename)

console.log(req.body)

// res.json({file:req.file,body:req.body})

res.send(`<image width='50%' src='/${req.file.filename}'></image>`)
})


app.get('/profile',(req,res)=>{
    let html=''
    ImageData.forEach(image=>{
        html+=`<image width='50%' src='/${image}'></image>`
    })
    res.send(html)
})



app.listen(PORT,()=>{
    console.log(`app is running on http://localhost:${PORT}`)
})