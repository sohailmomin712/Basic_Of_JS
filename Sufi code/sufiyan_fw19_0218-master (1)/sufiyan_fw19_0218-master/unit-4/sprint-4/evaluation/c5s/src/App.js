import { useReducer, useState } from "react";
import "./App.css";
import { UserRow } from "./Component/UserRow";

const initialState = {
  name: "",
  gender: "Male",
  role: "FrontEnd Developer",
  maritalStatus: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "gender":
      return { ...state, gender: action.payload };
    case "role":
      return { ...state, role: action.payload };
    case "maritalStatus":
      return { ...state, maritalStatus: action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};


function App() {
  const[data,setData]=useState([])

  const [user,Setuser]=useState(initialState)

 const handleData = (e)=>{
   const { name: key, value, type, checked } = e.target

   const val = type == "checkbox" ? checked : value

   Setuser({...user, [key]:val })
 }

 const submitData = (e)=>{

  e.preventDefault()

  setData([...data, user ])

  Setuser(initialState)

}


  return (
    <div className="App">
      <div>
        <h1>User Form</h1>
        <h3>useReducer</h3>
        <div className="form-wrapper" data-testid="form-wrapper">
          <form onSubmit={submitData} data-testid="form-element">
            <div className="name-wrapper" data-testid="name-wrapper">
              <label>Name</label>
              {/* keep an input tag with name attribute as "name" type as "text" and placeholder as "Name" */}
              <input onChange={handleData} value={user.name} name="name" type="text" />
            </div>
            <div className="gender-wrapper"  data-testid="gender-wrapper">
              <label>Gender</label>
              <select onChange={handleData}  name="gender" value={user.gender} data-testid="gender-select">
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Prefer Not to Say'>Prefer Not to Say</option>
              </select>
            </div>
            <div className="role-wrapper" data-testid="role-wrapper">
              <label>Role</label>
              <select value={user.role} onChange={handleData}  name="role" data-testid="role-select">
                <option value='FrontEnd Developer' >FrontEnd Developer</option>
                <option value='BackEnd Developer' >BackEnd Developer</option>
                <option value='FullStack Developer' >FullStack Developer</option>
              </select>
            </div>
            <div
              className="marital-status-wrapper"
              data-testid="marital-status-wrapper"
            >
              <legend>Martial Status</legend>
              <div>
                {/* keep an input tag with type as "checkbox" and name as "maritalStatus" */}
                <input name='maritalStatus'   onChange={handleData} value={user.maritalStatus} type={"checkbox"} />
                <label>Married</label>
              </div>
            </div>
            <div>
              <button type="submit">SUBMIT</button>
            </div>
          </form>
        </div>

        {/* map through the userdata and render UserRow component to display the data in tabular format */}
        {/* print "no users found"  in there is no user data */}
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
      </div>
    </div>
  );
}

export default App;