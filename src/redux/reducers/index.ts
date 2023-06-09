import {combineReducers} from "redux";
import userReducer from "./user";
import chatReducer from "./chat";


const allReducers = combineReducers({
    userReducer,
    chatReducer
})

export default allReducers;
