//2 

import { DEC, INC } from "./actionTypes"



export const increament = (payload = 1)=> ( { type: INC, payload } )
export const decreament = (payload = 1)=> ( { type: DEC, payload } )