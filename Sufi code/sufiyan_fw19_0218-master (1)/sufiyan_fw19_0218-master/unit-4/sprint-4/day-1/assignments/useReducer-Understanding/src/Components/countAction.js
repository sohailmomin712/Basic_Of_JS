


export const incAmount = { type: "INCREMENT_AMOUNT"  }
export const decAmount = { type: "DECREMENT_AMOUNT"  }
export const resAmount = { type: "RESET_AMOUNT"  }


export const AmountByInput = (value) =>{
   return {
    type : "AMOUNT_BY_INPUT",
    payload : value
   }
}


export const LOGINSUCCESS = (value) =>{
   return {
    type : "LOGIN_SUCCESS",
    payload : value
   }
}