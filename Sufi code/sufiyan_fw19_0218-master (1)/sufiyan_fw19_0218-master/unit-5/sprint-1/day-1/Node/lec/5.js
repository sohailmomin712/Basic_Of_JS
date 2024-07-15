const fs = require("fs")

let db = require("./db.json")
console.log(db)


db.posts.push({id:1, name:"suFi"})

fs.writeFileSync( "./db.json", JSON.stringify(db), {
    encoding: "utf-8"
}
)