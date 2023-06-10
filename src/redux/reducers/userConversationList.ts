import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { addNewConversation, deleteConversation, addMessageToConversation, messagesInterface } from "../actions/userConversationList";

export interface UserConversation {
    conversation_name: string | null | number;
    conversation_id: string | number | null;
    conversation_avatar: string;
    conversation_type: string;
    conversation_members: string[];
    conversation_messages: messagesInterface[];
}

export interface UserConversationListState {
    userConversationList: { [conversationId: string]: UserConversation };
}

const initialState: UserConversationListState = {
    userConversationList: {}
};

const userConversationListReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addNewConversation, (state, action: PayloadAction<any>) => {
            const conversation_id = Object.keys(state.userConversationList).length + 1;
            if (conversation_id) {
                state.userConversationList[conversation_id] = action.payload;
            }
        })
        .addCase(deleteConversation, (state, action: PayloadAction<string | number | null>) => {
            const conversation_id = action.payload;
            if (conversation_id && state.userConversationList[conversation_id]) {
                delete state.userConversationList[conversation_id];
            }
        })
        .addCase(addMessageToConversation, (state, action: PayloadAction<{ conversation_id: string | number | null, message: messagesInterface }>) => {
            const conversation_id = action.payload.conversation_id;
            if (conversation_id && state.userConversationList[conversation_id]) {
                state.userConversationList[conversation_id].conversation_messages.push(action.payload.message);
            }
        });
});

export default userConversationListReducer;
