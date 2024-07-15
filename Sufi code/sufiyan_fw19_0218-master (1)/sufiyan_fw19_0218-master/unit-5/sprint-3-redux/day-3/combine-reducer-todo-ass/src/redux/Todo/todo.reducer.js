/// step 3

import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./todo.types"

// to have all state manage ment in one functiin


 /// mandotry initial state
 const initialValue  ={ todos: [] }
export const todoReducer = ( state=initialValue, {type, payload})=>{

    switch(type){

         
        case ADD_TODO : {
            return {
                ...state ,
                todos : [...state.todos, payload ]
            }
         }

         case UPDATE_TODO : {

            const updatedTODO = state.todos.map((el)=>{

                if(el.id === payload.id){
                    return payload
                }
                return el
            })
            
            return {
                ...state,
                todos : updatedTODO
            }
         }

         case DELETE_TODO : {
            const filterTODOS = state.todos.filter((el)=> el.id !== payload.id )
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