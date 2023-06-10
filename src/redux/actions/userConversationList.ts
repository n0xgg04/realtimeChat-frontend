import { createAction } from "@reduxjs/toolkit";

interface ConversationData {
    conversation_name: string | null | number;
    conversation_avatar: string;
    conversation_type: string;
    conversation_members: string[];
    conversation_messages: string[];
}

export interface messagesInterface{
    message_id : string | number,
    message_content : string,
    message_sender : string,
    message_time : string | Date
}

export const addNewConversation = createAction<ConversationData>("conversation/addNewConversation");

export const deleteConversation = createAction<string | number | null>("conversation/deleteConversation");

export const addMessageToConversation = createAction<{
    conversation_id: string | number | null,
    message: messagesInterface
}>("conversation/addMessageToConversation");