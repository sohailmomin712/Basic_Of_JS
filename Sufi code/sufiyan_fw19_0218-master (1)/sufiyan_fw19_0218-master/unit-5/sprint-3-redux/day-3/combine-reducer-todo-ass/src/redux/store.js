import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";

import thunk from "redux-thunk";
import { AuthReducer } from "./Auth/auth.reducer";
// redux doesnt  asynchronous REQUEST
// redux thunk external librariy 
// to handle asynchronous REQUEST 

import { CounterReducer } from "./Counter/counter.reducer";
import { todoReducer } from "./Todo/todo.reducer";


const rootReducer = combineReducers({
    counter : CounterReducer,
    todos : todoReducer,
    auth: AuthReducer
})



const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export const store = legacy_createStore( rootReducer , createComposer(applyMiddleware(thunk)) )