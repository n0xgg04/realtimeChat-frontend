import {combineReducers} from "redux";
import userReducer from "./user";
import conversationReducer from "./conversation";
import userConversationList from "./userConversationList";


const allReducers = combineReducers({
    user: userReducer,
    conversation: conversationReducer,
    userConversationList: userConversationList
})



export default allReducers;
