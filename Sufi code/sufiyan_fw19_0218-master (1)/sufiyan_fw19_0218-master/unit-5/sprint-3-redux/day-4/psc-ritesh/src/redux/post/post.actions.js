import axios from "axios"
import { GET_POSTS } from "./post.types"



// 3 

// redux doesnt do this so we need to use 
// redux thunk external librariy 
// to handle asynchronous REQUEST 

export const getPosts = ()=> async (dispatch) =>{

    let res = await axios.get("http://localhost:8080/posts")
    return dispatch({ type : GET_POSTS, payload: res.data})
  
} 