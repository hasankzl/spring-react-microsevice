import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk"
import reduxPromise from "redux-promise-middleware"
import logger from "redux-logger"
import rootReducer from "./combineReducers"
const initialState = {}
const middleware = [thunk, logger, reduxPromise]
let composed = compose(applyMiddleware(...middleware))
const store = createStore(rootReducer, initialState, composed)
export default store;