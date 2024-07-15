// 3 

import { ADD_TODO, DELETE_TODO, GET_TODO, GET_total } from "./todo.type"


const init = {
    todos : [] , 
    total : 0,
    uncomplete : 0
}

export const TodoReducer = (state=init, { type, payload })=>{

    switch(type){

        case GET_TODO : {
            return{
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

        case DELETE_TODO : {
            return state
        }

        case GET_total : {
            
            let count = 0 

        state.todos.map((el)=> {
            if(el.status == false ){
                count++
            }
              
         })

          return{
             ...state, 
             total : state.todos.length, 
             uncomplete : count
          }
        }

        default : {
            return state
        }
    }


}