// read files

const arguments = process.argv

const fs = require("fs") // os , fs , http , stream

const method = arguments[2]


// Async
if(method == "read"){
    const fileName =  arguments[3]
     fs.readFile(`./${fileName}`, "utf-8", (err,data)=>{
         console.log(`data in file :  ${data}`)
     } )
}

if(method == "delete"){
    const fileName =  arguments[3]
  fs.unlink(`./${fileName}`, (err)=>{
  
    if(err){
        console.log("err")
    }

    console.log(`${fileName} : File Deleted successfully`)

  })

}

if(method == "create"){
    const fileName =  arguments[3]
    fs.open(`./${fileName}`, "w", (err,file)=>{
       
        if(err){
            console.log("err")
       
        }

        console.log(`${fileName} : Created successfully`)
    } )

}

if(method == "rename"){
    const fileName =  arguments[3]
    const newName =  arguments[4]
    
    fs.rename(`${fileName}`, `${newName}`, (err)=>{
        if(err){
            console.log("err")
        }

        console.log(`${fileName} => ${newName} : Rename successfully`)
    })

}

if(method == "append"){
  
    const Content =  arguments[3] 
    const fileName =  arguments[4]

    fs.appendFile(`${fileName}`, `${Content}`, (err)=>{
        if(err){
            console.log("err")
        }

        console.log(`${fileName} Updated successfully`)
    })


}





//console.log(method,fileName)

// COMMANDS 

//node index.js read test.txt
// node index.js append CONTENT test.txt
// node index.js delete 3.txt
// node index.js create 3.txt
// node index.js rename 3.txt 2.txt