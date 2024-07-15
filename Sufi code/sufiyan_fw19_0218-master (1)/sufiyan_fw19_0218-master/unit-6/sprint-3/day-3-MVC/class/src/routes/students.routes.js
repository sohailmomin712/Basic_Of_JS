
const {Router} = require("express")
const { createStudent, FindStudent } = require("../controller/student.controller")


const studentRoute = Router()

studentRoute.get("/", async ()=>{

  const studentsList = await FindStudent() // reusable Controller
  return res.send(studentsList)

})

studentRoute.get("/:id", async ()=>{

    const id = re.params.id

    const student = await FindStudent(id) // reusable Controller
    return res.send(studentsList)
    
  })

studentRoute.post("/", async ()=>{
  const { name, age, studentCode } = req.body
  
  const {message} = await createStudent({name, age, studentCode})

  if(message !== "OK"){
      return res.send("student creation failed")
  }

  return res.send("student created successfull")


})






module.exports = {studentRoute}