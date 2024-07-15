const express = require("express")

const Blog = require("./blog.model")
const User = require("../user/user.model")


// toek to send 
// 634d1d4f156b6bd052e02e90:s@gmail.com:ss

// Authors With Blog
// 634d1df2156b6bd052e02e98
// 634d1d4f156b6bd052e02e90

const authMiddleware = async (req, res, next) => {

    let token = req.headers.token;
  
    if (token) {
      let [id, email, password] = token.split(":");

      let user = await User.findById(id);
  
      if (user.email === email && user.password === password) {
        req.userId = id;
        next();
      } else {
        res
          .status(401)
          .send("Not Authenticated, Cannot Perform this opertation missing persmission");
      }
    } else {
      res.status(401).send("Not Authenticated, Cannot Perform this opertation, missing persmission");
    }
};

const app = express.Router()
//app.use(authMiddleware)


app.get("/",authMiddleware, async (req,res)=>{
   
    const {page = 1 , limit =5} = req.query
    let token=req.headers.token;
    let [id, email, password] = token.split(":");
    try{
      
        let blog = await Blog.find({author:id},{ content:1, isCompleted:1, author:1 } )
                             .limit(limit).skip((page-1) * limit)

        res.send(blog)


    }catch(e){
        console.log(e)
       res.status(500).send(e.message)
    }
 
})

app.get("/:id", authMiddleware, async (req,res)=>{

  let token=req.headers.token;
  let idBLog = req.params.id
 
  let [id, email, password] = token.split(":");


    try{
      
        let blog = await Blog.find({author: id, _id:idBLog  })
        res.send(blog)


    }catch(e){
       res.status(500).send(e.message)
    }
 
})

app.post("/",authMiddleware, async  (req,res)=>{

    try{
       let blog = await Blog.create(req.body)
       res.send({blog})

    }catch(e){
        console.log(e)
        res.status(500).send(e.message)
    }

} )


app.delete("/:id",authMiddleware,async(req,res)=>{

  let token=req.headers.token;
  let idBLog = req.params.id
 
  let [id, email, password] = token.split(":");

  
  try{
  await Blog.deleteOne({author:id, _id:idBLog })
  res.send("delted success")

  }
  catch(err){
    console.log(err);
    res.status(401).send("Wrong id plese enter correct id ")

  }
})


app.patch("/:id",authMiddleware, async(req,res)=>{

  let token=req.headers.token;

  let idBLog = req.params.id

  let [id, email, password] = token.split(":");
  
    try{
let blog=await Blog.replaceOne({author:id},req.body)
   res.send("blog updated success")
    }
    catch(e){
        res.status(500).send(e.message)
    }
})










module.exports = app