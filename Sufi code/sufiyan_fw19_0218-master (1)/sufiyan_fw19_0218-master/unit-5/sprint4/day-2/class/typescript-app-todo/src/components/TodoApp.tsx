import React, { useState } from 'react'
import TodoInuput from './TodoInuput'
import TodoItem from './TodoItem'


type Todo = {
    id: number,
    content: string, 
    isCompleted: boolean
}

const TodoApp = () => {

  const [todos, settodos] = useState<Todo[]>([])

  const addTodo = (content: string)=>{
     
    settodos( [...todos,
       { id: Date.now(), 
        content,
         isCompleted: false }] )
  }


  const toggleStatus = (id: number)=>{
   let  updatedTodos = todos.map((el)=> {
      if(el.id == id){
        el.isCompleted = !el.isCompleted
      }
      return el
    })
    settodos(updatedTodos)

  }

  const deleteTodo = (id: number)=> {

    let updatedTodos = todos.filter((el)=> el.id != id) 
    settodos(updatedTodos)

  }

  return (
    <div>
     <h1>TODO APP</h1>
     <TodoInuput onAdd={addTodo} />
     {
      todos.map((el)=>(
        <TodoItem deleteTodo={deleteTodo} toggleStatus={toggleStatus}  key={el.id} {...el}  />
      ))
     }

    </div>
  )
}

export default TodoApp
