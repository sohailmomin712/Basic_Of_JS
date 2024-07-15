// action creators related to auth state;

export const LOGINREQUEST = { type : "LOGIN_REQUEST" }
export const LOGINFAIL = { type : "LOGIN_FAIL" }

export function LOGINSUCCESS(token){

    return { type : "LOGIN_SUCCESS" ,
             payload : token     }

}
