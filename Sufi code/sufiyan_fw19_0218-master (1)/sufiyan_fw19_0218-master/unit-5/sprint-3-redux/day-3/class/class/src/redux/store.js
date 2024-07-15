
import { act } from "react-dom/test-utils";
import { legacy_createStore, compose, applyMiddleware , combineReducers } from "redux";
import {  CounterReducer } from "./counter/counter.reducer";
import { TodoReducer } from "./todo/todo.reducer";


const createComposer =  window.__REDUX_DEVTOOLS_EXTENSION__ || compose

const rootReducer = combineReducers({
    counter : CounterReducer ,
    todos : TodoReducer
})

const  logger = (state)=> (next)=> (action)=> {
   
   if( typeof action === "function"){
    return action(state.dispatch , state.getState )
   }
   
    return next(action)
}
// create composer

export const store = legacy_createStore(rootReducer , applyMiddleware( logger ) )