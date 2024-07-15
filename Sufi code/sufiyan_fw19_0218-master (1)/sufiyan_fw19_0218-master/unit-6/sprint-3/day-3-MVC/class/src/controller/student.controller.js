const { StudentModel } = require("../models/student.model")



const createStudent = async ({  name, age, studentCode })=>{

    if(age>28){
        return{
            message : "NOT OK",
            desc : "student above age 28 are not allowed"  
         }
    }
     
    const student = new StudentModel({name, age, studentCode})

    await student.save()
    return{
       message : "OK",
       desc : "student created successfully"  
    }
  
}

// reusable 
const FindStudent = async (id)=>{

    if(id){
        // find one student
        const student = await StudentModel.findById(id)
       return student
    }else{
        // find all studentS
        const students = await StudentModel.find(id).limit(10)
        return students
    }
     
    
  
}
module.exports = {createStudent, FindStudent}