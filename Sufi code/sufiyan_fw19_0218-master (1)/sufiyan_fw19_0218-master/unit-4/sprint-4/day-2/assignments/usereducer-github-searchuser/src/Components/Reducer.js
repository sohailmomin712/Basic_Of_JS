export const Reducer = (state, action)=>{

    switch(action.type){

       case "Loading_Handle" :
          return {...state, loading:!state.loading}

        case "Fetch_Success" :
           return {...state,  data : action.payload}
    
        case "Fetch_Error" :
            return {...state, err:"somthing went wrong"}

        default :
           return state
    }
   



}
