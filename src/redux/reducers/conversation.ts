import {setConversationId, setConversationName, setConversationAvatar, setConversationType, setConversationMembers, setConversationMessages, setConversationData} from "../actions/conversation";
import {createReducer} from "@reduxjs/toolkit";

interface ConversationState {
    conversation_id: string | number | null,
    conversation_name: string,
    conversation_avatar: string,
    conversation_type: string,
    conversation_members: string[],
    conversation_messages: string[]
}


const initialState : ConversationState = {
    conversation_id: "",
    conversation_name: "",
    conversation_avatar: "",
    conversation_type: "",
    conversation_members: [],
    conversation_messages : []
}

const conversationReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setConversationId, (state, action) => {
            state.conversation_id = action.payload
        })
        .addCase(setConversationName, (state, action) => {
            state.conversation_name = action.payload
        })
        .addCase(setConversationAvatar, (state, action) => {
            state.conversation_avatar = action.payload
        })
        .addCase(setConversationType, (state, action) => {
            state.conversation_type = action.payload
        })
        .addCase(setConversationMembers, (state, action) => {
            state.conversation_members = action.payload
        })
        .addCase(setConversationMessages, (state, action) => {
            state.conversation_messages = action.payload
        })
        .addCase(setConversationData, (state, action) => {
            state.conversation_id = action.payload.conversation_id
            state.conversation_name = action.payload.conversation_name
            state.conversation_avatar = action.payload.conversation_avatar
            state.conversation_type = action.payload.conversation_type
            state.conversation_members = action.payload.conversation_members
            state.conversation_messages = action.payload.conversation_messages
        })
})

export default conversationReducer