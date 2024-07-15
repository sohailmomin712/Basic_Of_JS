const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    email : { type: String, required: true, unique : true },
    name : { type: String, required: true },
    password : { type: String, required: true  },
    age : { type: Number,  }

},{
    versionKey: false,
    timestamps: true,
})


const User = mongoose.model("user", userSchema);
module.exports = User

//email should be unique
/*
/// SCHEMA ////
User : {
//    name : >>  String , required , Unique  
//    password : >>  String , required, min:8, max:20   
//    email : >>  String , required , Unique  
//    age: >>  Number } */
