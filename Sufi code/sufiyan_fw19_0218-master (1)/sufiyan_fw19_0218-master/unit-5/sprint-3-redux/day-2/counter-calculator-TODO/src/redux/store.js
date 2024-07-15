import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import { CounterReducer } from "./Counter/counter.reducer";
import { todoReducer } from "./Todo/todo.reducer";

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose

const rootReducer = combineReducers({
    counter : CounterReducer,
    todos : todoReducer
})

const logger = (state)=>(next)=>(action)=>{

    if (typeof action == "function"){
        return action(state.dispatch , state.getState )
    }

    return next(action)
}

export const store = legacy_createStore( rootReducer , applyMiddleware(logger) )