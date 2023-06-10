import {setUsername, setUserId, setToken, setAvatar, setUserData, SetIsCreatingConversation, setConversationOpening} from "../actions/user";
import {createReducer} from "@reduxjs/toolkit";

interface UserState {
    username : string,
    user_id : string,
    token : string,
    avatar : string,
    isCreatingConversation : boolean | null | number,
    conversationOpening : null | string | number
}

const initialState : UserState = {
    username: "",
    user_id: "",
    token: "",
    avatar: "",
    isCreatingConversation : false,
    conversationOpening : null
}

const userReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setUsername, (state, action) => {
            state.username = action.payload
        })
        .addCase(setUserId, (state, action) => {
            state.user_id = action.payload
        })
        .addCase(setToken, (state, action) => {
            state.token = action.payload
        })
        .addCase(setAvatar, (state, action) => {
            state.avatar = action.payload
        })
        .addCase(SetIsCreatingConversation, (state, action) => {
            state.isCreatingConversation = action.payload
        })
        .addCase(setConversationOpening, (state, action) => {
            state.conversationOpening = action.payload
            state.isCreatingConversation = false
        })
        .addCase(setUserData, (state, action) => {
            state.username = action.payload.username
            state.user_id = action.payload.user_id
            state.token = action.payload.token
            state.avatar = action.payload.avatar
            if (action.payload.isCreatingConversation) {
                state.isCreatingConversation = action.payload.isCreatingConversation as boolean
            }else{
                state.isCreatingConversation = false
            }
        })
})

export default userReducer