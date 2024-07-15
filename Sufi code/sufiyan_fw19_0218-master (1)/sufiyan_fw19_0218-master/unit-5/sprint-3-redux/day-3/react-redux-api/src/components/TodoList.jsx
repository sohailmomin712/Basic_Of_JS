import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { redirect, useNavigate } from 'react-router-dom'
import { DELETE_TODO_ACTION, get_Todo_Action, get_total_action } from '../redux/todo/todo.action'

const TodoList = () => {

    const { todos } = useSelector((store)=> store.todo )
   console.log(todos)
    const dispatch = useDispatch()


    const navigate = useNavigate()

    const singleUser = (id)=>{
        navigate(`/todo/${id}`)
    }


    const [ Fetch, setFetch ] = useState(false)
    // console.log(todos)

    useEffect(()=>{
      dispatch( get_total_action() )
        dispatch(get_Todo_Action())
       
    },[Fetch])

  return (
    <div style={{margin:"auto", justifyContent:"center", textAlign:"center"}} >
          <h1 style={{color:"brown" , fontWeight:"bolder"}} >TODOS</h1>

          <div style={{margin:"auto", justifyContent:"center", textAlign:"center" }} >
          {
            todos?.map((el,i)=>(
                <div key={i} style={ i%2==0 ? { textAlign:"center" , margin:"auto", padding: "20px",  display: "flex", 
                gap: "50px", backgroundColor:"hsl(33, 53%, 54%)", color:"yellow", fontSize:"25px", fontWeight:"bolder" } : { textAlign:"center" , margin:"auto", padding: "20px",  display: "flex", 
                gap: "50px", backgroundColor:"hsl(33, 53%, 20%)", color:"yellow", fontSize:"25px", fontWeight:"bolder" } } >
                    
                   <div style={{display:"flex", gap:"50px", gridTemplateColumns:"80% 20% 20%"}}   > 
                    {el.title} 
                  <button onClick={()=>singleUser(el.id)} >EDIT</button>
                 
                  <button  onClick={()=> {
                    dispatch(DELETE_TODO_ACTION(el.id))
                    dispatch( get_total_action() )
                    setFetch(!Fetch)
                    alert("Deleted Successfully")
                  } } >Delete</button>

                 Status : {el.status === true ? "Done" : "Pending" }
                </div>

                
               
               </div>   
      
            ))
          }

        </div>

      
    </div>
  )
}

export default TodoList


/*
  <button  >{el.status === true ? "COMPLETED" : "NOT" }</button> 
                 <button >DELETE</button> 
                 */
