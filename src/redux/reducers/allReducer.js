import { combineReducers } from "redux";
import countReducer from "./count";
import personReducer from "./person";
const allReducers=combineReducers({
    sum:countReducer,
    persons:personReducer
})

export default allReducers