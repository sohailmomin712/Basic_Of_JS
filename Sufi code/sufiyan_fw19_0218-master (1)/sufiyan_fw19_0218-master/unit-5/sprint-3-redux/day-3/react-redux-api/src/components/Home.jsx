import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ADD_TODO_Action, get_total_action } from '../redux/todo/todo.action'

const Home = () => {

    
   const [name , setname] = useState("") 

   const dispatch = useDispatch()
  const [fetch ,setFetch] = useState(false)

   useEffect(()=>{
    dispatch( get_total_action() )
   },[fetch])

  return (
    <div>
        <div style={{margin:"auto", justifyContent:"center", textAlign:"center"}} >
          <h1 style={{color:"brown" , fontWeight:"bolder"}} >ADD TODOS</h1>


          <input 
           value={name} onChange={ (e)=> setname(e.target.value)  }
        />  
        <button style={{height:"50px", width:"100px" , fontSize:"25px"}}
        onClick={ ()=>{
            dispatch( ADD_TODO_Action({ title: name, status: false }) )
            dispatch( get_total_action() )
            alert("Added Successfully")
            setFetch(!fetch)
            setname("")
        } }
        >ADD</button>
        </div>
          


     
    </div>
  )
}

export default Home
