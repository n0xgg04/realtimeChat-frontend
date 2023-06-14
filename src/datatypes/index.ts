import {messagesInterface} from "../redux/actions/userConversationList";

export interface ConversationToAddInterface {
    conversation_id: string | number | null,
    conversation_messages : any,
    conversation_name : string | null | number,
    conversation_type : string | number,
    create_at : string|null,
    updated_at : string|null,
}

export interface ListConversationInterface {
    conversationList: ConversationToAddInterface[]
}

export interface UserConversation {
    conversation_name: string | null | number;
    conversation_id: string | number;
    conversation_avatar: string;
    conversation_type: string;
    conversation_members: string[];
    conversation_messages: messagesInterface[];
}