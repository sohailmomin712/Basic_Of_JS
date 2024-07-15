// read files

const fs = require("fs");

// non blocking
console.log("before")
fs.readFile("./sampleFile.txt" ,"utf-8" ,(err,data)=>{
    console.log(data)
})

console.log("after")


console.log("before2")

let data = fs.readFileSync("./sampleFile.txt" ,"utf-8")
console.log(data,"data")
console.log("after2")