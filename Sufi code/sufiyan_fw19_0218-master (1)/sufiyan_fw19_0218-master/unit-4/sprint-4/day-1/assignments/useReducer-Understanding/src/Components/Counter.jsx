

import { useState } from "react"
import { useReducer } from "react"
import { 
    incAmount,
    decAmount,
    resAmount,
    AmountByInput } 
    from "./countAction"
import  reducer  from "./counteReducer"


// RAD
// Reducer
// Actions
// Dispatchers
// State management - state, dispatch


const initState = {
    counter : 0,
    key: "value",
    isAuth : true
}



export function Counter(){

    const [state, dispatch] = useReducer(reducer,initState)

    const [value, setValue] = useState(0)

     
    return (

        <>
        <div>

        <h1> Counter : {state.counter}  </h1>

        <input
        value={value}
        type="number"
        onChange={(e) => setValue(Number(e.target.value))}
        placholder="increment by"
        />

        </div>
        <div>
            <button onClick={()=>dispatch(incAmount)} >ADD</button>
            <button onClick={()=>dispatch(decAmount)} >REDUCE</button>
            <button onClick={()=>dispatch(resAmount)} >RESET</button>
        </div>
        <br />
        <div>
            <button onClick={()=>{
                const action = AmountByInput(value)
                dispatch(action)
            }} >ADD BY VALUE</button>

            <button 
            onClick={()=>{
                const action = AmountByInput(-value)
                dispatch(action)
            }}>DEC BY VALUE</button>
        </div>


        </>
       



    )
}