import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { addNewConversation, deleteConversation, addMessageToConversation, messagesInterface, loadConversationList } from "../actions/userConversationList";
import { ListConversationInterface, UserConversation } from "../../datatypes";

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
        })
        .addCase(loadConversationList, (state, action: PayloadAction<ListConversationInterface>) => {
            const conversation_list = action.payload.conversationList;
            if (conversation_list) {
                conversation_list.forEach((conversation) => {
                    if(!conversation.conversation_id) return;
                    state.userConversationList[conversation?.conversation_id] = {
                        conversation_name: conversation.conversation_name,
                        conversation_id: conversation.conversation_id,
                        conversation_avatar: "",
                        conversation_type: conversation.conversation_type as string,
                        conversation_members: [],
                        conversation_messages: conversation.conversation_messages
                    };
                });
            }
        });
});

export default userConversationListReducer;
