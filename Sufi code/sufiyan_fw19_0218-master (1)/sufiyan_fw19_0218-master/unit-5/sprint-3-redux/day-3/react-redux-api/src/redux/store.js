import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";

import { TodoReducer } from "./todo/todo.reducer";

import thunk from "redux-thunk";

// redux doesnt  asynchronous REQUEST
// redux thunk external librariy 
// to handle asynchronous REQUEST 

const rootReducer = combineReducers({
    todo : TodoReducer
})

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore( 
    rootReducer, createComposer(applyMiddleware(thunk))
)