import React, { useEffect, useRef, useState } from 'react'



const useStopwatch = (initialValue) => {

    const [ time , setTime ] = useState(initialValue)
    const timerId = useRef(null)

     const start = ()=> {
           
      if(!timerId.current){
         timerId = setInterval(()=> {
                setTime((prevValue)=> prevValue + 1 )
         }, 1000)
      }

     };

     const pause = ()=> {
       clearInterval(timerId.current)
       timerId.current = null
     };
     
     const reset = ()=> {
        clearInterval(timerId.current)
        timerId.current = null
        setTime(0)
     };

     useEffect(()=>{
             return reset
     }, [])



  return { time , start , reset , pause }
}

export default useStopwatch
