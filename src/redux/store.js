import { createStore, combineReducers } from "redux";
import { getDataReducer } from "./getData/reducer.js";


const rootReducer = combineReducers({
 Data: getDataReducer,
})


export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// console.log("entire store " , store.getState())


