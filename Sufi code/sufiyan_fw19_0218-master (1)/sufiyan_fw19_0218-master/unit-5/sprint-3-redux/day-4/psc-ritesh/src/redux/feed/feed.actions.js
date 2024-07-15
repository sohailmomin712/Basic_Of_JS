import axios from "axios"
import { GET_FEEDS } from "./feed.types"


// 3 

// redux doesnt do this so we need to use 
// redux thunk external librariy 
// to handle asynchronous REQUEST 

export const getFeeds = ()=> async (dispatch) =>{

    let res = await axios.get("http://localhost:8080/feeds")
    return dispatch({ type : GET_FEEDS, payload: res.data})
  
} 