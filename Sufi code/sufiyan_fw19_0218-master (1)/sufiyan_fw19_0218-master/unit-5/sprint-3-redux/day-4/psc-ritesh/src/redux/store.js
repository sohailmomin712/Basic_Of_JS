import { legacy_createStore , combineReducers, applyMiddleware, compose } from "redux"

import thunk from "redux-thunk"
// redux doesnt  asynchronous REQUEST
// redux thunk external librariy 
// to handle asynchronous REQUEST 

import { authReducer } from "./auth/auth.reducer"
import { postReducer } from "./post/post.reducer"
import { feedReducer } from "./feed/feed.reducer"

const rootReducer = combineReducers({
    auth: authReducer,
    feed : feedReducer,
    post : postReducer
})



const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore (
    rootReducer,
     createComposer(applyMiddleware(thunk))
)