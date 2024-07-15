
// to manage actions that can be performed form any place in a single file
// 2
import { DEC, DIV, INC, MULTI } from "./counter.types";

export const increment = ( payload =1 ) => ( {type: INC, payload} )
export const decrement = ( payload =1 ) => ( {type: DEC, payload} )

export const multiply = ( payload =1 ) => ( { type: MULTI, payload } )
export const divide = ( payload =1 ) => ( { type: DIV, payload } )