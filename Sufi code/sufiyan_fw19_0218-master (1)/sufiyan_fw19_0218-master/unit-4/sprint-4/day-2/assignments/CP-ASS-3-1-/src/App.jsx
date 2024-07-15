import { useState } from "react";
import "./App.css";
import { UserRow } from "./components/UserRow";


const initValue = {
 name : "",
 gender : "",
 role : "",
 maritalstatus : ""
}

function App() {

  const [formData, setFormDAta] = useState(initValue)

  const [data, setData] = useState([])

  const handleData = (e)=>{
    const { name: key, value, type, checked } = e.target

    const val = type == "checkbox" ? checked : value

    setFormDAta({...formData, [key]:val })
  }

  const submitData = (e)=>{

    e.preventDefault()

    setData([...data, formData ])

    setFormDAta(initValue)

  }

  return (
    <div className="App">
      <div>
        <h1>User Form</h1>
        <div className="form-wrapper" data-testid="form-wrapper">
          <form onSubmit={submitData} data-testid="form-element">
            <div className="name-wrapper" data-testid="name-wrapper">
              <label>Name</label>
              {/* keep an input tag with name attribute as "name" type as "text" and placeholder as "Name" */}
              <input onChange={handleData} value={formData.name} name="name" type="text" placeholder="Name" />

            </div>
            <div className="gender-wrapper" data-testid="gender-wrapper">
              <label>Gender</label>

              <select  onChange={handleData} value={formData.gender} name="gender" data-testid="gender-select" >
                <option value="Male" >Male</option>
                <option value="Female" >Female</option> 
                <option value="Prefer Not to Say" >Prefer Not to Say</option> 
              </select>


            </div>
            <div className="role-wrapper" data-testid="role-wrapper">
              <label>Role</label>

              <select   data-testid="role-select" onChange={handleData} value={formData.role} 
              name="role">
                <option  value="FrontEnd Developer" >FrontEnd Developer</option>
                <option value="BackEnd Developer" >BackEnd Developer</option>
                <option value="FullStack Developer" >FullStack Developer</option>
              </select>


            </div>
            <div
              className="marital-status-wrapper"
              data-testid="marital-status-wrapper"
            >
              <legend>Martial Status</legend>
              <div>
                {/* keep an input tag with type as "checkbox" and name as "maritalStatus" */}
                <input 
                onChange={handleData}
                checked={formData.maritalstatus}
                type={"checkbox"}
                 name="maritalstatus"
                 />
                 
                <label>Married</label>
              </div>
            </div>
            <div>
              <button >SUBMIT</button>
            </div>
          </form>
        </div>
      </div>

      <table>
  <thead>
    <tr>
      <th>S.No</th>
      <th>User</th>
      <th>Gender</th>
      <th>Role</th>
      <th>Marital Status</th>
    </tr>
  </thead>
  <tbody>
        {
           data.map((el,i)=> (
                <UserRow 
                name={el.name}
                gender={el.gender}
                role={el.role}
                maritalStatus={el.maritalStatus}
                id={i+1}
                
                />
           ))
           
        }
  </tbody>
</table>  
 
     

      {
           data.length === 0 && <h2 data-testid="no-user-container">no users found</h2>     
        }

     
      {/* map through the userdata and render UserRow component to display the data in tabular format */}
      {/* print "no users found"  in there is no user data */}
    </div>
  );
}

export default App;
