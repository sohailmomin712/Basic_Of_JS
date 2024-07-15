

function reducer(state, action){

  switch(action.type){
    
    case "INCREMENT_AMOUNT" :
        return {...state, counter: state.counter + 1 };
    // no break since we are returning from the function

    case "DECREMENT_AMOUNT" :
        return {...state, counter: state.counter - 1 };

    case "RESET_AMOUNT":
        return { ...state, counter: 0 };

    case "AMOUNT_BY_INPUT":
        return {...state, counter: state.counter + action.payload };   
        // other examples of how to manage state
    case "LOGIN_SUCCESS":
            return { ...state, token: action.payload.token, isAuth: true };
    case "LOGOUT_SUCCESS":
            return { ...state, token: null, isAuth: false };
    default:
        return state;   
  }

  // default case
  // incase you put a wrong spelling REST_COUNT
  // we are ingoring it, and returning same state
}

export default reducer;



