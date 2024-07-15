
import { DOGS_ERROR, DOGS_LOADING, DOGS_SUCCESS, DOGS_ADD_SUCCESS } from "./dogs.types"
import axios from "axios"


export const Action_Get_Dogs = (  ) => async( dispatch )=>{

    dispatch({ type : DOGS_LOADING })

    try{
        
        let res = await axios.get("https://json-server-3spu.onrender.com/api/dogs")
        dispatch({ type : DOGS_SUCCESS, payload : res.data })
     
    }catch(err){
    
        dispatch({ type : DOGS_ERROR, payload : err.message })
         return("err")
    }

}

export const Action_Post_Dogs = ( data ) => async( dispatch )=>{

    dispatch({ type: DOGS_LOADING });

    try {
      let res = await axios.post(
        "https://json-server-3spu.onrender.com/api/dogs",
        data
      );

      dispatch({ type: DOGS_ADD_SUCCESS, payload: res.data });
      return "success";

    } catch (error) {
      dispatch({ type: DOGS_ERROR, payload: error.message });
    }

}






