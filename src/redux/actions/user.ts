import {createAction} from "@reduxjs/toolkit";

export const setUsername = createAction<string>("user/setUsername");
export const setUserId = createAction<string>("user/setUserId");
export const setToken = createAction<string>("user/setToken");
export const setAvatar = createAction<string>("user/setAvatar");
export const SetIsCreatingConversation = createAction<boolean>("user/setIsCreateConversation");

export const setConversationOpening = createAction<string | null | number>("user/setConversationOpening");

export const setUserData = createAction<{
    username: string,
    user_id: string,
    token: string,
    avatar: string
    isCreatingConversation: boolean | null | number,
    conversationOpening : null | string | number
}>("user/setUserData");
