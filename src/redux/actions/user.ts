import {createAction} from "@reduxjs/toolkit";

export const setUsername = createAction<string>("user/setUsername");
export const setUserId = createAction<string>("user/setUserId");
export const setToken = createAction<string>("user/setToken");
export const setAvatar = createAction<string>("user/setAvatar");

export const setUserData = createAction<{
    username: string,
    user_id: string,
    token: string,
    avatar: string
}>("user/setUserData");
