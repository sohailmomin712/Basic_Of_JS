import React, { useEffect, useRef, useState } from 'react'
import useStopwatch from '../hooks/useStopwatch'

export const Watch2 = () => {

  const { time , start , reset , pause } = useStopwatch()

 
  return (
    <div>
        <h1>StopWatch : {time}</h1>
        <div>
            <button onClick={start} > start </button>
            <button onClick={pause} > pause </button>
            <button onClick={reset} > reset </button>
        </div>
      
    </div>
  )
}

