

const { Schema, model } = require("mongoose")


const StudentSchema = new Schema({

     name: String,
     age: Number,
     unit : String,
     scores : Number,
     studentCode :  String

})

const StudentModel = model("student", StudentSchema)
module.exports = { StudentModel}