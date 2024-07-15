

const useClock = () => {

  // TODO
  // refer readme.md for what to return

const time = new Date()
const hours = time.getHours()
const minutes = time.getMinutes() 
const seconds = time.getSeconds()
 
  return {
    hours:  hours /** Current time in hours */,
    minutes: minutes  /** Current time in minutes */,
    seconds:  seconds /** Current time in seconds */,
   };


};

export default useClock;
