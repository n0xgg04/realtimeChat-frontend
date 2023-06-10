import {
    addMessageToConversation,
    addNewConversation,
    deleteConversation
} from "../../redux/actions/userConversationList";
import { setConversationOpening } from "../../redux/actions/user";
import {messagesInterface} from "../../redux/actions/userConversationList";

export function createNewConversation(conversation: any, user: any, createConversationToUsername: any, avatar: any, dispatch: any) {
    let newConversationPayload = {
        conversation_name: createConversationToUsername.current?.value as string,
        conversation_avatar: avatar,
        conversation_type: "private",
        conversation_members: [user.username, createConversationToUsername.current?.value],
        conversation_messages: []
    };

    dispatch(addNewConversation(newConversationPayload));
}

export function deleteChat(dispatch: any, conversationId: string | number | null) {
    console.log("delete conversation");
    dispatch(deleteConversation(conversationId));
}

export function openChat(dispatch: any, conversationId: string | number | null) {
    dispatch(setConversationOpening(conversationId));
    console.log("open conversation", conversationId);
}

export function addMessage(dispatch: any, conversationId: string | number | null, message: messagesInterface) {
    dispatch(addMessageToConversation({conversation_id : conversationId, message : message}));
}

export function sendMessage(dispatch: any, conversationId: string | number | null,message: messagesInterface) {
    addMessage(dispatch, conversationId, {
        message_id : Math.random().toString(36).substring(7),
        message_content : message.message_content,
        message_sender : message.message_sender,
        message_time : new Date().toLocaleString()
    });
}

