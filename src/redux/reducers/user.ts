import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import {
    setUserName,
    setUserId,
    setUserToken,
    setUserAvatar,
    setUserAvatarColor,
    setUserData,
} from "../actions/user";

interface UserState {
    userId: string | null;
    userName: string | null;
    userToken: string | null;
    userAvatar: string | null;
    userAvatarColor: string | null;
}

const initialState: UserState = {
    userId: null,
    userName: null,
    userToken: null,
    userAvatar: null,
    userAvatarColor: null,
};

export const userReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setUserName, (state, action: PayloadAction<{ name: string }>) => {
            state.userName = action.payload.name;
        })
        .addCase(setUserId, (state, action: PayloadAction<{ id: string }>) => {
            state.userId = action.payload.id;
        })
        .addCase(setUserToken, (state, action: PayloadAction<{ token: string }>) => {
            state.userToken = action.payload.token;
        })
        .addCase(setUserAvatar, (state, action: PayloadAction<{ avatar: string }>) => {
            state.userAvatar = action.payload.avatar;
        })
        .addCase(setUserAvatarColor, (state, action: PayloadAction<{ color: string }>) => {
            state.userAvatarColor = action.payload.color;
        })
        .addCase(setUserData, (state, action: PayloadAction<UserState>) => {
            state.userId = action.payload.userId;
            state.userName = action.payload.userName;
            state.userToken = action.payload.userToken;
            state.userAvatar = action.payload.userAvatar;
            state.userAvatarColor = action.payload.userAvatarColor;
        });
});

export default userReducer;
