const { Schema, model} = require("mongoose")

const UserSchema = new Schema({

    Bitcoin : Number,
    Matic : Number,
    Etherium : Number,
    email : String
})

const UserModel = model("user", UserSchema)
module.exports = UserModel

// _id
// 638dc5bf1d595d37937f03d3
// Bitcoin
// 1
// Matic
// 3
// Etherium
// 0
// id
// 1
// email
// "noorani786.ss@gmail.com"
