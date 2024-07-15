
// to manage actions that can be performed form any place in a single file

import { DEC, INC } from "./counter.types";

export const increament = (payload = 1)=> ( {type : INC, payload } )
export const decreament = (payload = 1)=> ( {type : DEC, payload } )
