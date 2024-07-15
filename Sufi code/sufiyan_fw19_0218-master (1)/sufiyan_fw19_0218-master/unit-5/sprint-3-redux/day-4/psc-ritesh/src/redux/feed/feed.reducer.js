// 2

import { GET_FEEDS } from "./feed.types"



const init = {
  feeds : []
}
export const feedReducer = (state = init, { type, payload })=>{

   switch(type){

      case GET_FEEDS : {

        return{
          ...state,
          feeds : payload
        }
      }

       default:{
         return state
       }

   }






}