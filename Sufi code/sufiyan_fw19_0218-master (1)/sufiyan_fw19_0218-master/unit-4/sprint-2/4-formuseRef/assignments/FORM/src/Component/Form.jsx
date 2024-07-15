import { useState ,useRef } from "react"

const initial = {
    name: "",
    gender: "",
    role: "",
    maritalStatus: ""
}


function FormFunc(){

     const [users, setusers] = useState([]);
     const [formData, setForm] = useState(initial);

    const handleChange = (e)=>{

       const { name: key, value, type, checked } = e.target ; 

       const val = type === "checkbox" ? checked : value ;

       setForm({...formData, [key]:val})

    }

  //  console.log(formData)

    const submitForm = (e)=>{
 
        e.preventDefault()
        setusers([...users, formData])
        setForm(initial)
        document.getElementById('myform').reset();
    }

    console.log(users);

    
    return(
       
        <div>

           <h1>My Form</h1>
           <form id="myform" onSubmit={submitForm} >

           <div style={{display:'flex' , gap:"20px", }} >
            
            <input value={formData.name} name="name" onChange={handleChange} 
             type="text" placeholder="Enter Name" /> 

            <select  onChange={handleChange} value={formData.gender} name="gender" id="">
               <option value="Male">Male</option>
               <option value="Femal">Femal</option>
               <option value="Custom">Custom</option>
            </select>

            <select  onChange={handleChange} value={formData.role} name="role" id="">
               <option value="SDE-1">SDE-1</option>
               <option value="SDE-2">SDE-2</option>
               <option value="SDE-3">SDE-3</option>
            </select>

            <label>
                Married
               <input onChange={handleChange} type="checkbox" checked={formData.maritalStatus} name="maritalStatus"  />
            </label>    

           </div>

           <div>
            <button type="submit">SUBMIT</button>
           </div>

           </form>
        </div>

    )
}

export default FormFunc