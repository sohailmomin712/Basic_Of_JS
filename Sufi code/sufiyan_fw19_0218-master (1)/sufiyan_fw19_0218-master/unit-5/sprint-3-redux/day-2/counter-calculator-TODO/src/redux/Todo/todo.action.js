/// step 2  

import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./todo.types"


export const addTODO = (payload=1 ) => ({  type:ADD_TODO , 
    payload: { id:Date.now(), ...payload } })

export const updateTODO = (payload=1 ) => ({  type: UPDATE_TODO , payload })

export const deleteTODO = (payload=1 ) => ({  type:DELETE_TODO , payload })