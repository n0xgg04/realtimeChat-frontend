import React from "react";
import ItemInbox from "./ItemInbox";
import { useSelector } from "react-redux";


export default function ListUserInbox(): JSX.Element {
    const conversationList = useSelector(
        (state : any) => state.userConversationList
    ).userConversationList ;

    console.log("Conversation List:",conversationList)

    // (
    //     <ItemInbox
    //         avatar={conversationList[item]?.conversation_avatar || ""}
    //         lastMessage={"You: vcl"}
    //         name={item.conversation_name || "Unknown"}
    //         key={item}
    //         conversationId={item.conversation_id}
    //     />
    // )

    console.log(Object.keys(conversationList))

    return (
        <>
            <ul>
                {Object.keys(conversationList).map(
                    (item: any) : JSX.Element => (
                        <ItemInbox
                            avatar={conversationList[item]?.conversation_avatar || ""}
                            lastMessage={"You: vcl"}
                            name={conversationList[item]?.conversation_name || "Unknown"}
                            key={item}
                            conversationId={item}
                        />)
                )}
            </ul>
        </>
    );
}
