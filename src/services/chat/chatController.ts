import {
    addMessageToConversation,
    addNewConversation,
    deleteConversation
} from "../../redux/actions/userConversationList";
import { setConversationOpening } from "../../redux/actions/user";


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

export function sendMessage(dispatch: any, user: any, message: {
    message_sender: any;
    message_content: string;
    message_time: string;
    user_id : string | number;
    message_id: string | number;
}) {
    dispatch(addMessageToConversation({conversation_id: user.conversationOpening, message: {
            message_id: Math.random().toString(36).substr(2, 9),
            message_content: message.message_content,
            message_sender: user.username,
            user_id : user.user_id,
            message_time: new Date().toLocaleTimeString()
    }}));
}