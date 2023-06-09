import { createAction } from '@reduxjs/toolkit';

interface SetPartnerIdPayload {
    id: string;
}

interface SetPartnerNamePayload {
    name: string;
}

interface SetPartnerAvatarPayload {
    avatar: string;
}

interface SetPartnerAvatarColorPayload {
    color: string;
}

interface SetPartnerOnlinePayload {
    online: boolean;
}

interface SetPartnerTypingPayload {
    typing: boolean;
}

interface SetPartnerLastSeenPayload {
    lastSeen: string;
}

interface AddMessagesPayload {
    messages: string[];
}

export const setParnerId = createAction<SetPartnerIdPayload>('chat/SET_PARTNERID');
export const setPartnerName = createAction<SetPartnerNamePayload>('chat/SET_PARTNERNAME');
export const setPartnerAvatar = createAction<SetPartnerAvatarPayload>('chat/SET_PARTNERAVATAR');
export const setPartnerAvatarColor = createAction<SetPartnerAvatarColorPayload>('chat/SET_PARTNERAVATARCOLOR');
export const setPartnerOnline = createAction<SetPartnerOnlinePayload>('chat/SET_PARTNERONLINE');
export const setPartnerTyping = createAction<SetPartnerTypingPayload>('chat/SET_PARTNERTYPING');
export const setPartnerLastSeen = createAction<SetPartnerLastSeenPayload>('chat/SET_PARTNERLASTSEEN');
export const addMessages = createAction<AddMessagesPayload>('chat/ADD_MESSAGES');