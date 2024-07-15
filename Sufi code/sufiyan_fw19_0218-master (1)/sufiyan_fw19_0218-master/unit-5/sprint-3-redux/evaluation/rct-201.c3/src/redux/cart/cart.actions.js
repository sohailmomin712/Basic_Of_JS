// Cart Actions here

import axios from "axios"
import { ADD_ITEM_TO_CART_ERROR, ADD_ITEM_TO_CART_LOADING, ADD_ITEM_TO_CART_SUCCESS, GET_CART_ITEMS_ERROR, GET_CART_ITEMS_LOADING, GET_CART_ITEMS_SUCCESS, REMOVE_CART_ITEMS_ERROR, REMOVE_CART_ITEMS_LOADING, REMOVE_CART_ITEMS_SUCCESS, UPDATE_CART_ITEMS_ERROR, UPDATE_CART_ITEMS_LOADING, UPDATE_CART_ITEMS_SUCCESS } from "./cart.types"




export const action_get_cartItem = ()=> async (dispatch)=>{

    dispatch({ type: GET_CART_ITEMS_LOADING})
    try{
        let res = await axios.get("http://localhost:8080/cartItems")
        return dispatch({ type : GET_CART_ITEMS_SUCCESS, payload: res.data })
    }catch(err){
         dispatch({ type : GET_CART_ITEMS_ERROR , payload : err.message })
    }
}

export const action_add_cartItem = (payload=1)=> async (dispatch)=>{

    dispatch({ type: ADD_ITEM_TO_CART_LOADING})

    try{
         await axios.post("http://localhost:8080/cartItems", payload)
        return dispatch({ type : ADD_ITEM_TO_CART_SUCCESS })

    }catch(err){
         dispatch({ type : ADD_ITEM_TO_CART_ERROR , payload : err.message })
    }
}

   export const action_remove_cartItem = (payload=1)=> async (dispatch)=>{

    dispatch({ type: REMOVE_CART_ITEMS_LOADING})
   
    try{
        await axios.delete(`http://localhost:8080/cartItems/${payload}`)
        return dispatch({ type : REMOVE_CART_ITEMS_SUCCESS })
    }catch(err){
        dispatch({ type : REMOVE_CART_ITEMS_ERROR , payload : err.message })
    }

}


/// UPDATE_CART_ITEMS_LOADING
// UPDATE_CART_ITEMS_SUCCESS
// UPDATE_CART_ITEMS_ERROR


export const action_update_qty = (payload=1)=> async (dispatch)=>{

    dispatch({ type: UPDATE_CART_ITEMS_LOADING})

   try{

    fetch(`http://localhost:8080/products/${payload.id}`,{
        method : "PATCH",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({qty: payload.value})
    })
    .then(res=>res.json())

    let res = await axios.get("http://localhost:8080/cartItems")
   dispatch({ type : GET_CART_ITEMS_SUCCESS, payload: res.data })

     dispatch({ type: UPDATE_CART_ITEMS_SUCCESS, payload: payload})

   }catch(err){
      dispatch({ type : UPDATE_CART_ITEMS_ERROR , payload : err.message })
   }


}
