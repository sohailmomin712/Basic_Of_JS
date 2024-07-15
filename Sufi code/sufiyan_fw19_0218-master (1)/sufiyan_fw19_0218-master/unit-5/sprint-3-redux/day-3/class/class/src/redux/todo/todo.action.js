
/// step 2  

import axios from "axios"
import { ADD_TODO, DELETE_TODO, UPDATE_TODO, GET_TODO } from "./todo.types"

export const getTodos = async ( dispatch )=>{
    let res = await axios.get("http://localhost:3004/todos")
    let data = await res.data
    return {
        type: GET_TODO,
        payload: data,
    }
}


export const addTODO = (payload=1 ) => ({  type:ADD_TODO , payload: { id:Date.now(), ...payload } })

export const updateTODO = (payload=1 ) => ({  type: UPDATE_TODO , payload })

export const deleteTODO = (payload=1 ) => ({  type:DELETE_TODO , payload })