import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { AuthContext } from '../context/AuthContext';

const Dashbord = () => {

    
  const { isAuth, userID, handleLogOut } = useContext(AuthContext);

  const [ Data, SetData] = useState({})
  const [ Loading, setLoading] = useState(true)

  const [Task , SetTask] = useState("")

  useEffect(()=>{

    fetch("https://json-server-3spu.onrender.com/api/users/" + userID)
    .then((res)=> res.json())
    .then((res)=> {
        SetData(res)
        setLoading(false)
    })
    .catch((e)=> console.log( e.message))


}, [userID, Task])

 //   console.log(Data)
    
  

 // console.log(userData)

  const AddTask = ()=>{

    if(Data.tasks.length >= 5) return alert("Daily Task Limit Exceed")


    let tasks = [...Data.tasks, Task]
    
   console.log(tasks)
    

    fetch("https://json-server-3spu.onrender.com/api/users/" + userID, {
        method: "PATCH",
        body: JSON.stringify( {tasks: tasks} ),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log("Success:", data);
          // Add the book to the table
          alert("Task Addedd")
          SetTask("")
        })
        .catch(error => {
          console.error("Error:", error);
        });

       
        
   console.log(Task)
  }


  let today = new Date();
 let dd = today.getDate();
 let mm = today.getMonth() + 1; // January is 0!
 let yyyy = today.getFullYear();
 
 if (dd < 10) {
   dd = '0' + dd;
 }
 if (mm < 10) {
   mm = '0' + mm;
 }
 today = mm + '/' + dd + '/' + yyyy;
 //console.log(userData);
 


 if(Loading){
    return(
    <div  id="dashbord-div">
     <img src='https://dltqhkoxgn1gx.cloudfront.net/img/posts/6-vue-loader-animation-libraries-to-reduce-your-bounce-rate-2.png' />
    </div>

    )
 }
 

  return (
    <div  id="dashbord-div">
    <div id='header-dash' >  
    
        <h2>Hello !</h2>
        <button onClick={handleLogOut} >Logout</button>
     </div> 

     
    <h1>{Data.username}</h1>

    <p>Good to see you here</p>
    <p>Your total tasks for today - {Data.tasks.length}</p>

    <h2>Tasks for {Data.tasks.length}</h2>

    <div>
       
       {
        Data.tasks && Data.tasks.map((el,i)=> (
            <p> {i+1}) {el}</p>
        ) )
       }
       

    </div>


    <br/><br/>
    <input 
    placeholder='Add Your task'
    value={Task} onChange={(e)=>SetTask(e.target.value)} type="text"  />

    <button id='main-button' onClick={AddTask} >Add New Task</button>

    
    <p>Use Context Used * on refresh login remain same untill logout</p>

    </div>
  )
}

export default Dashbord
