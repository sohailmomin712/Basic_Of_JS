// 2

import { GET_POSTS } from "./post.types"





const init = {
  posts : []
}

export const postReducer = (state = init, { type, payload })=>{

   switch(type){

      case GET_POSTS : {

        return{
          ...state,
          posts : payload
        }
      }

       default:{
         return state
       }

   }






}