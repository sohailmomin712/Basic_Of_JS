

const { Schema , model } = require("mongoose")

const Userschema = new Schema ({
  name : String,   
  email : {  type: String, unique : true },    
  password : String,
  age : Number,
  role : {
    type : String,
    enum : [ "HR" , "Employee", "Guest" ] // Enumerators
  }
}) 


const UserModel = model("user", Userschema)

module.exports = UserModel




//There are only 3 levels of roles in the company:
//  => HR = > 
//  => Employee
//  => Guests

// basic details 
// name , email , password , age