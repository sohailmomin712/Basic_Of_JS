const UserModel = require("../models/user.model")

const FindUser = async (id)=>{

    if(id){
        // find one user
        const user = await UserModel.findOne({email:"noorani786.ss@gmail.com"})
       return user
    }else{
        // find all user
        const user = await UserModel.findOne({email:"noorani786.ss@gmail.com"})
        return user
    }
  
}

const UpdateUser = async ({key, value})=>{

  
        // find one user
      //const user = await UserModel.findOneAndUpdate( {id:1}, { key : value })
      
if(key == "Bitcoin"){
    var user = await UserModel.findOneAndUpdate({_id:"638dcaac1d595d37937f03d4"}, {$set:{"Bitcoin":value}});
    return true
}

if(key == "Matic"){
    var user = await UserModel.findOneAndUpdate({_id:"638dcaac1d595d37937f03d4"}, {$set:{"Matic":value}});
    return true
}
if(key == "Etherium"){
    var user = await UserModel.findOneAndUpdate({_id:"638dcaac1d595d37937f03d4"}, {$set:{"Etherium":value}});
    return true
}

return false
    
  
}
module.exports = {FindUser,  UpdateUser}