import { UPDATE_CART_ITEMS_ERROR, UPDATE_CART_ITEMS_LOADING, UPDATE_CART_ITEMS_SUCCESS } from "../cart/cart.types";
import { GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS } from "./product.types";

// Note: Do not update/change the initial state
const productInitalState = {
  loading: false,
  error: false,
  data: [],
};

export const productReducer = (state = productInitalState, {type, payload} ) => {


  switch(type){

    case GET_PRODUCTS_LOADING : {
      return{
        ...state, 
        loading: true,
        error: false,
      }
    }

    case GET_PRODUCTS_SUCCESS : {
      return{
        ...state, 
        loading: false,
        error: false,
        data : payload
      }

    }

    case GET_PRODUCTS_ERROR : {
      return{
        ...state, 
        loading: false,
        error: true,
      }
    }

    case UPDATE_CART_ITEMS_LOADING : {
      return{
        ...state, 
       
      }
    }          
  
    case UPDATE_CART_ITEMS_SUCCESS : {
      return{
        ...state, 
        loading: false,
        error: false
       
      }
    }
  
    case UPDATE_CART_ITEMS_ERROR : {
      return{
        ...state, 
       
      }
    }







    default : {
      return state
    }


  }



 
};

///UPDATE_CART_ITEMS_LOADING
//UPDATE_CART_ITEMS_SUCCESS
//UPDATE_CART_ITEMS_ERROR