import "./App.css";
// import data from db.json
import data from './db.json'
import UserDetails from "./components/UserDetails";
import { useState } from "react";

function App() {
//  console.log(data)


const [userData,setUserData]=useState(data)


 const handleSortAsc=()=>{
  
  const user=data.sort((a,b)=>{
    if(a.first_name>b.first_name)
    {
      return 1
    }
    if(a.first_name<b.first_name)
    {
      return -1
    }
    return 0
  })
  setUserData([...user])
 }

 const handleSortDsc=()=>{
  const user=data.sort((a,b)=>{
    if(a.first_name>b.first_name)
    {
      return -1
    }
    if(a.first_name<b.first_name)
    {
      return 1
    }
    return 0
  })
  setUserData([...user])
 }
  return (
    <div className="App" data-testid = 'app'>
      <button onClick={handleSortAsc}  data-testid = 'sort-asc-btn'>Sort by Asc</button>
      <button onClick={handleSortDsc}  data-testid = 'sort-desc-btn'>Sort by Desc</button>
      {userData.map((el)=>(
         <UserDetails item={el} />
      ))}
      
    </div>
  );
}

export default App;