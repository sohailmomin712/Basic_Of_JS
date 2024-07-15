import React from 'react'

type todoItemProps = {
  id:number,
  content: string ,
  isCompleted : boolean ,
  toggleStatus: Function,

  /// this is returning
  deleteTodo: (id:number) => void
}    

 // type toggleStatusProps = {
 //     toggleStatus: Function
 // }


const TodoItem = (   { id , content , isCompleted, toggleStatus, deleteTodo } : todoItemProps) => {


  return (
    <div  >
       <span> {content} </span>
       -------
       <span> {isCompleted ? "DONE" : "PENDING"} </span>

       <button onClick={()=>toggleStatus(id) } >CHANGE STATUS</button>

       <button onClick={()=>deleteTodo(id) } >DELETE</button>

    </div>
  )
}

export default TodoItem
