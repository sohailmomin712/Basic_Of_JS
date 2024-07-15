const {Schema,model}=require("mongoose")

const BlackListSchema=new Schema({
  userid : String
})

const BlackListModel=model("blacklist",BlackListSchema)

module.exports=BlackListModel

//app.use((req,res,next)=>{
//    const token = req.headers.authorization
//    if(!token){
//        return res.send("give token")
//
//    }
//   try{
//    const verification = jwt.verify(token, "SECRET123")
//    if(verification.exp > new Date().getTime()){
//
//        return res.send("token is expired")
//    }
//    if(blacklist.includes(token)){
//        return res.send("token is already used")
//    }
//    next()
//   }catch(e){
//
//   }
//    
//})
