const { Schema, model } = require("mongoose")

const UserSchema = new Schema({
    name : String,
    email : { type : String, unique: true },
    password : String,
    age : Number,
    role : {
        type : String,
        enum : ["HR" , "Employee", "Guest"] // Enumerators
    }
})

const UserModel = model("user", UserSchema)

module.exports = UserModel
//argon2 , pbkdf2 , bcrypt