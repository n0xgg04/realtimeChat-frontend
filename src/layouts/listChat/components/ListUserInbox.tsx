import React from "react";
import ItemInbox from "./ItemInbox";
import { useSelector } from "react-redux";


export default function ListUserInbox(): JSX.Element {
    const conversationList = useSelector(
        (state : any) => state.userConversationList
    ).userConversationList ;
    const user = useSelector((state : any) => state.user);

    return (
        <>
            <ul>
                {Object.keys(conversationList).map(
                    (item: any) : JSX.Element => (
                        <ItemInbox
                            avatar={conversationList[item]?.conversation_avatar || ""}
                            lastMessage={`
                                ${conversationList[item]?.conversation_messages[
                            conversationList[item]?.conversation_messages.length - 1
                                ]?.message_sender === user.username ? "You : " : ""}
                                ${conversationList[item]?.conversation_messages[
                                    conversationList[item]?.conversation_messages.length - 1
                                ]?.message_content || ""}
                            `}
                            name={conversationList[item]?.conversation_name || "Unknown"}
                            key={item}
                            conversationId={item}
                        />)
                )}
            </ul>
        </>
    );
}
