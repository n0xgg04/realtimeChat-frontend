import * as chatActions from "../actions/chat";
import { createReducer, PayloadAction } from "@reduxjs/toolkit";

interface ChatState {
    partnerId: string | null;
    partnerName: string | null;
    partnerAvatar: string | null;
    partnerAvatarColor: string | null;
    partnerOnline: boolean | null;
    partnerTyping: boolean | null;
    partnerLastSeen: string | null;
    messages: string[];
}

const initialState: ChatState = {
    partnerId: null,
    partnerName: null,
    partnerAvatar: null,
    partnerAvatarColor: null,
    partnerOnline: null,
    partnerTyping: null,
    partnerLastSeen: null,
    messages: [],
};

const chatReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(chatActions.setParnerId, (state, action: PayloadAction<{ id: string }>) => {
            state.partnerId = action.payload.id;
        })
        .addCase(chatActions.setPartnerName, (state, action: PayloadAction<{ name: string }>) => {
            state.partnerName = action.payload.name;
        })
        .addCase(chatActions.setPartnerAvatar, (state, action: PayloadAction<{ avatar: string }>) => {
            state.partnerAvatar = action.payload.avatar;
        })
        .addCase(chatActions.setPartnerAvatarColor, (state, action: PayloadAction<{ color: string }>) => {
            state.partnerAvatarColor = action.payload.color;
        })
        .addCase(chatActions.setPartnerOnline, (state, action: PayloadAction<{ online: boolean }>) => {
            state.partnerOnline = action.payload.online;
        })
        .addCase(chatActions.setPartnerTyping, (state, action: PayloadAction<{ typing: boolean }>) => {
            state.partnerTyping = action.payload.typing;
        })
        .addCase(chatActions.setPartnerLastSeen, (state, action: PayloadAction<{ lastSeen: string }>) => {
            state.partnerLastSeen = action.payload.lastSeen;
        })
        .addCase(chatActions.addMessages, (state, action: PayloadAction<{ messages: string[] }>) => {
            state.messages = [...state.messages, ...action.payload.messages];
        });
});

export default chatReducer;
