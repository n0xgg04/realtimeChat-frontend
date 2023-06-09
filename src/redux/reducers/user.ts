import {setUsername, setUserId, setToken, setAvatar, setUserData} from "../actions/user";
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
    username: "",
    user_id: "",
    token: "",
    avatar: ""
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
        .addCase(setUserData, (state, action) => {
            state.username = action.payload.username
            state.user_id = action.payload.user_id
            state.token = action.payload.token
            state.avatar = action.payload.avatar
        })
})

export default userReducer