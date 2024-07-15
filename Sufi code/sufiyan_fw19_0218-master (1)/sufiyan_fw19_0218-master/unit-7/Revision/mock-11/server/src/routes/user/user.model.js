const {Schema,model} = require('mongoose')

const UserSchema = new Schema({

email:{type:String, unique:true},
password:{ type:String, required:true },

},{versionKey:false})

const UserModel = model("user",UserSchema)
module.exports=UserModel