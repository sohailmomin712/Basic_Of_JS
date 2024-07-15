import { useState } from "react";






const useClock = () => {

 // const [hours, setHours] = useState<number>(0);
 // const [minutes, setMinute] = useState<number>(0);
 // const [seconds, setSeconds] = useState<number>(0);
  // TODO
  // refer readme.md for what to return

  const time = new Date();
  const hrs = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();

  


  return {
             hours  : hrs , /** Current time in hours */
             minutes : min , /** Current time in minutes */
             seconds : sec  /** Current time in seconds */
  };

};

export default useClock;



{ /*


 const [hrs, setHours] = useState<number>(0);
 const [min, setMinute] = useState<number>(0);
 const [sec, setSeconds] = useState<number>(0);
  // TODO
  // refer readme.md for what to return

  const time = new Date();

  setInterval(() => {
     setHours( time.getHours())
     setMinute( time.getMinutes())
     setSeconds( time.getSeconds())
  }, 1000);
  

*/  }
