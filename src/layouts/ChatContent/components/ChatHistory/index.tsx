import React from "react";
import {messagesInterface} from '../../../../redux/actions/userConversationList'
import {useSelector} from "react-redux";

export default React.memo(function () : JSX.Element{
    const user = useSelector((state : any) => state.user);
    const conversation = useSelector((state : any) => state.userConversationList).userConversationList

    React.useEffect(() => {
        const messageContent = document.querySelector('.messenger-content_body')
        if(messageContent){
            messageContent.scrollTop = messageContent.scrollHeight
        }
    },[conversation[user.conversationOpening].conversation_messages.length])

    return (
        <div className="messenger-content_body-message">
            {conversation[user.conversationOpening].conversation_messages.map((item : any,index : number) =>
                <div className={"messenger-content_body-message-item " + (item.message_sender === user.username ? "user-me" : "user-not-you")} key={index}>
                    <div className="messenger-content_body-message-item-avatar">
                        <img src={conversation[user.conversationOpening].conversation_avatar} alt="avatar"/>
                    </div>
                    <div className="messenger-content_body-message-item-content">
                        <div className="messenger-content_body-message-item-content-text">
                            <span>{item.message_content}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
})