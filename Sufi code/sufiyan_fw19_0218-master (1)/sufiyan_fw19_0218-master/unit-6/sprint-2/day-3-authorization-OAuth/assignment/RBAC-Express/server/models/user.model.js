

const { Schema , model } = require("mongoose")

const Userschema = new Schema ({
  name : String,   
  email : {  type: String, unique : true },    
  password : String,
  age : Number,
  role : {
    type : String,
    enum : [ "Admin" , "Writter", "User" ] // Enumerators
  }
}) 


const UserModel = model("user", Userschema)

module.exports = UserModel



