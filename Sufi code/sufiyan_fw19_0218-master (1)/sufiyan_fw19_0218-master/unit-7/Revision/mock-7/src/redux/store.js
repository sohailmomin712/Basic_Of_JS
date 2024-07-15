// TODO: use this store variable to create a store.

import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from "./auth/auth.reducer";
import { DogsReducer } from "./dogs/dogs.reducer";





const rootReducer = combineReducers({
  auth : AuthReducer,
 dogs : DogsReducer
})

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export const store = legacy_createStore(rootReducer, createComposer(applyMiddleware(thunk)))

