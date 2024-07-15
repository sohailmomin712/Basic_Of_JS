

// to manage actions that can be performed form any place in a single file

import { ADD_TODO, DEC, INC } from "./actionTypes";

export const increament = (payload = 1)=> ( {type : INC, payload } )
export const decreament = (payload = 1)=> ( {type : DEC, payload } )

export const addTodo = (payload) => ({type: ADD_TODO, payload})

// we need to update value by given value but if we dont provide it should // send as 1 
