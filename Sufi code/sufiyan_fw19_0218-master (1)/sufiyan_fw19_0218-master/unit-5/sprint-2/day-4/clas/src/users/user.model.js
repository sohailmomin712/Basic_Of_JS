const mongoose = require("mongoose")

//schema : INFORMATION ABOUT STRUCTURE OF DATA
const userSchema = new mongoose.Schema({

    name: { type:String , required:true },
    lname: { type:String , required:true },
    email: { type:String , required:true },
    gender : { type:String , required:true, enum: ["Male","Female" ] },
    age : { type:Number , required:true, min:18 ,max:60 },
},{
  versionKey : false, // it will not return __V into object
  timestamps: true // it will add created time and updated time
  
})

// MODEL : INFORMATION OF THE COLLECTION
 const Users = mongoose.model("user", userSchema);

 module.exports = Users

