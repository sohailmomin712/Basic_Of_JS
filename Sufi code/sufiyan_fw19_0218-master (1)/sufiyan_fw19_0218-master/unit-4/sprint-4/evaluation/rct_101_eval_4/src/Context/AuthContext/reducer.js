// reducer related to auth state;


function reducer(state,action){
   

    switch(action.type){

        case "LOGIN_SUCCESS" :
          return {...state , isLoading : false , isError : false, authStatus: true, token: action.payload }
        
        case "LOGIN_REQUEST" :
          return {...state , isLoading:true }
            
        case "LOGIN_FAIL" :
           return {...state , isError : true, isLoading : false , }

    }
 
    
}

export default reducer
