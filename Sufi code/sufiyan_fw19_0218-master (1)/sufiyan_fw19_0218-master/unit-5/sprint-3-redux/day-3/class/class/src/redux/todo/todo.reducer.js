/// step 3

// to have all state manage ment in one functiin

import { ADD_TODO, DELETE_TODO, UPDATE_TODO, GET_TODO } from "./todo.types";

 /// mandotry initial state
 const initialValue  ={ todos: [] }


 
export const TodoReducer = (state = initialValue ,{type, payload}) =>{

    switch(type){

        case GET_TODO : {
            return {
                ...state ,
                todos : payload
            }
         }  

     case ADD_TODO : {
        return {
            ...state ,
            todos : [...state.todos, payload ]
        }
     }

     case UPDATE_TODO : {
        const id = payload.id
        
        const updateTODOS = state.todos.map((el)=> {
            if (el.id === id){
                return payload
            } 
            return el
        })

        return {
            ...state ,
            todos : updateTODOS
        }
    }

    case DELETE_TODO : {
        const id = payload.id
        const filterTODOS = state.todos.filter((el)=> el.id !== id )

        return {
            ...state ,
            todos : filterTODOS
        }
    }


     default : {
           return state
     }

    }




}