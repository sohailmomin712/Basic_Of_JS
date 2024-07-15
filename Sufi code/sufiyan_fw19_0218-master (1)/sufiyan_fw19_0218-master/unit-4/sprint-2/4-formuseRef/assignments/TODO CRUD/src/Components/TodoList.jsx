import React from "react";

const TodoList=({key,title,status,id,handleToggle,handleDelet})=>{

   

    return (

        <div
        style={{
            display:"flex", 
            gap : "1rem",
            justifyContent :"space-between"
        }}>
           <b> {title} </b> {status ? "DONE" : "NOT DONE"}
           <button onClick={()=>handleToggle(id, !status)} >TOGGLE STATUS</button>
           <button onClick={()=>handleDelet(id)} >DELET</button>
        </div>

    )
} 



export default TodoList