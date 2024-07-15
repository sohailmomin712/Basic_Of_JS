
    
export const FetchError = {type : "Fetch_Error"}


export const LoadingHandle =  {type : "Loading_Handle"} 

export const FetchSuccess = (value)=>{

    return {
        type: "Fetch_Success",
        payload: value
    }
 
    
}