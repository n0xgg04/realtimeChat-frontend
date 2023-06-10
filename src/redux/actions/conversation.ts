import {createAction} from "@reduxjs/toolkit";

export const setConversationId = createAction<string>("conversation/setConversationId");
export const setConversationName = createAction<string>("conversation/setConversationName");
export const setConversationAvatar = createAction<string>("conversation/setConversationAvatar");
export const setConversationType = createAction<string>("conversation/setConversationType");
export const setConversationMembers = createAction<string[]>("conversation/setConversationMembers");
export const setConversationMessages = createAction<string[]>("conversation/setConversationMessages");

export const setConversationData = createAction<{
    conversation_id: string,
    conversation_name: string,
    conversation_avatar: string,
    conversation_type: string,
    conversation_members: string[],
    conversation_messages: string[]
}>("conversation/setConversationData");