

// to have all state manage ment in one functiin

import { DEC, INC } from "./counter.types"

 /// mandotry initial state
const initialValue  ={ 
    count : 0,
  }

export const CounterReducer = (state = initialValue ,action) =>{

    switch(action.type){

        case INC : {
            return { ...state,  count: state.count +  action.payload }
        }
        case DEC : {
            return { ...state, count: state.count- action.payload  }
        }

        default : {
            return state
        }
    }

}


/// 
// mandory to add default case
 ///  default : {
 ///      return state
 ///  }

 // if we didnt add it will not show on err 

 // react render onLoad at that time redux running and
 // there is no case at that time so we need to add  default case

