/// step 2  

import axios from "axios"
import { ADD_TODO, DELETE_TODO, GET_TODO, GET_total, UPDATE_TODO } from "./todo.type"



 
// redux doesnt handle asynchronous REQUEST
// redux thunk external librariy 
// to handle asynchronous REQUEST 

/// asynchronous Function 
export const get_Todo_Action = ()=> async (dispatch)=>{
    let res = await axios.get("http://localhost:8060/todo")
   return dispatch({ type : GET_TODO, payload: res.data })
   
}

export const ADD_TODO_Action = (payload=1)=> async (dispatch)=> {

    let res = await axios.post("http://localhost:8060/todo",payload )
    console.log(res.data)
   return dispatch({ type : ADD_TODO, payload: res.data })
   
}

export const DELETE_TODO_ACTION = (payload=1)=> async (dispatch)=>{

   await axios.delete(`http://localhost:8060/todo/${payload}`)
   return dispatch({ type : DELETE_TODO, payload })

}


export const UPDATE_TODO_ACTION = (payload=1)=> async (dispatch)=>{

      fetch(`http://localhost:8060/todo/${payload.id}`,{
          method : "PATCH",
          headers : {
              "Content-Type" : "application/json"
          },
          body : JSON.stringify({status: payload.status})
      })
      .then(res=>res.json())

   return dispatch({ type : UPDATE_TODO  })

}

// method dispatch function only 
export const get_total_action = (payload=1)=> ( {  type: GET_total  } )





// export const toggleTodo = (id, newStatus) =>{
// 
//    return fetch(`http://localhost:3000/tasks/${id}`,{
//        method : "PATCH",
//        headers : {
//            "Content-Type" : "application/json"
//        },
//        body : JSON.stringify({status: newStatus})
//    })
//    .then(res=>res.json())
// }



 //export const ADD_TODO_Action = (payload=1)=> ({   
 //  type : ADD_TODO ,  payload: payload
 //})


