// Product actions here

import axios from "axios"
import { GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS } from "./product.types"



export const action_get_products = ()=> async (dispatch)=>{

    dispatch({ type: GET_PRODUCTS_LOADING})

    try{
        let res = await axios.get("http://localhost:8080/products")
        return dispatch({ type : GET_PRODUCTS_SUCCESS, payload: res.data })
    }catch(err){
         dispatch({ type : GET_PRODUCTS_ERROR , payload : err.message })
    }
}


