
//5 
import { decreament, increament } from "./redux/actions.js";
import { store  } from "./redux/store.js";


console.log(store.getState())

store.dispatch(increament())
console.log(store.getState())

store.dispatch(increament())
console.log(store.getState())

store.dispatch(increament(20))
console.log(store.getState())

store.dispatch(decreament(10))
console.log(store.getState())

store.dispatch(decreament(10))
console.log(store.getState())
// "type": "module",
// in script to use Export module in node.js
// while importing file type is mandotory 

// import { store  } from "./redux/store.js";
// .js