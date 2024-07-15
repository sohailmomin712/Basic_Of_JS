import { useState ,useRef } from "react"



function Timer(){

 // seconds 
 const [time, setTime] = useState(0)

 const ref = useRef(null)
console.log(ref.current)
// start 
const startTimer = () =>{

    if(ref.current !== null ) return ;
    // prev => prev+1
      // state closure

    ref.current = setInterval(()=>{
        setTime((time) =>time+1)
    },1000)


}

// stop 
const stopTimer = () =>{
    clearInterval(ref.current)
    ref.current = null;
}

// reset 
const resetTimer = () =>{
    stopTimer();
    setTime(0);
}

    return(
        <div>

        <h1>{time}</h1>
        <button  onClick={startTimer} >START</button>
        <button  onClick={stopTimer} >STOP</button>
        <button  onClick={resetTimer} >RESET</button>

        </div>

    )
}

export default Timer