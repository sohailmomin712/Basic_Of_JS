import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTODO, deleteTODO, updateTODO } from '../redux/Todo/todo.action'

const Todo = () => {

   // useSelector is read only we cant update any state with this 
   const todos = useSelector((state)=> state.todos.todos )
   const dispatch = useDispatch()

   const [name , setname] = useState("") 

  return (
    <div><br />
 <div style={{border:"1px solid", backgroundColor:"red", color:"white"}} ><h1>TODO</h1></div>
     <br />   <div>
        <input 
        value={name} onChange={ (e)=> setname(e.target.value)  }
        />  
        <button onClick={()=> {
            dispatch(
               addTODO({
                   name :  name,
                   status : false
               })
           ) 
           setname("")
       }} >ADD</button>
        </div>


        <div style={{margin:"auto"}} >
          {
            todos?.map((el,i)=>(
                <div key={i} style={{border:"1px solid", backgroundColor:"blue", color:"white"}} >
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

