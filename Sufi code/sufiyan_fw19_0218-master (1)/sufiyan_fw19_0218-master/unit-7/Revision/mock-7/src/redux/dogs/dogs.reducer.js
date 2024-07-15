

import { 
DOGS_LOADING,
DOGS_SUCCESS,
  DOGS_ERROR,
  DOGS_ADD_SUCCESS,
} from "./dogs.types";



export const authinitialValues = {

  data : [],
  loading: false,
  error: false
};

export const DogsReducer = (state = authinitialValues,  { type , payload} ) => {


  switch(type){

    case DOGS_LOADING : {
      return{
        ...state , 
        loading: true, 
        error : false
      }
    }

    case DOGS_SUCCESS : {
     
      return{
        ...state , 
        data : payload,
        loading: false,
        error : false
      }

    }

    case DOGS_ERROR : {

      return{
        ...state , 
        token: "",
        isAuthenticated: false,
        loading: false,
        error : true
      }
    }

    case DOGS_ADD_SUCCESS : {
      return{
        ...state , 
     
        loading: false,
        error : false
      }
    }

    

    default : {
      return state
    }

}


};

