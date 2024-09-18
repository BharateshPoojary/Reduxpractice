import { combineReducers } from "redux";
import amountReducer from "./amount-reducer.jsx";

const available_reducers = combineReducers({
    amount: amountReducer
})
export default available_reducers;
//combineReducers return all the available reducers as a single reducer function