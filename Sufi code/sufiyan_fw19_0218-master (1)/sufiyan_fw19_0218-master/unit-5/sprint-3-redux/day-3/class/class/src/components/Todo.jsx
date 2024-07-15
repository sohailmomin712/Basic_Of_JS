import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTODO, deleteTODO, getTodos, updateTODO } from "../redux/todo/todo.action"

const Todo = () => {

      // useSelector is read only we cant update any state with this 
 const todos = useSelector((state)=> state.todos.todos )


 const dispatch = useDispatch()

 const [todo , settodo] = useState("") 

  useEffect(()=>{
    dispatch(getTodos())
  },[])


  return (
    <div>

       <input 
         value={todo} 
         onChange={(e)=> settodo(e.target.value) } 
         type="text" />   

         <button onClick={()=> {
            dispatch(
               addTODO({
                   name :  todo,
                   status : true
               })
           ) 
           settodo("")
       }} >ADD</button>

    




        <div style={{margin:"auto"}} >
          {
            todos?.map((el,i)=>(
                <div key={i}  >
                   <div > {el.name} - 
                   <button onClick={()=> dispatch(
                    updateTODO({
                    ...el, 
                    status: !el.status
                }))} >{el.status === true ? "COMPLETED" : "NOT" }</button> 
                 <button onClick={()=> dispatch(deleteTODO(el) )} >DELETE</button>
                </div>

                
               
               </div>   
      
            ))
          }

        </div>

     
      
    </div>
  )
}

export default Todo
