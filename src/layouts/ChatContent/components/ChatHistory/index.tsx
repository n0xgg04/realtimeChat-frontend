import React from "react";
import config from "../../../../config";
import {useSelector} from "react-redux";
import axios from "axios";

export default React.memo(function () : JSX.Element{
    const user = useSelector((state : any) => state.user);
    const userId = user.user_id;
    const conversation = useSelector((state : any) => state.userConversationList).userConversationList
    const avatarsRef = React.useRef<any>([])



    React.useEffect(() => {
        const messageContent = document.querySelector('.messenger-content_body')
        if(messageContent){
            messageContent.scrollTop = messageContent.scrollHeight
        }
    },[conversation[user.conversationOpening].conversation_messages.length])
    return (
        <div className="messenger-content_body-message">
            {conversation[user.conversationOpening].conversation_messages.map((item : any,index : number) => {
                return (
                <div
                    className={"messenger-content_body-message-item " + ((item.user_id === userId ) ? "user-me" : "user-not-you")}
                    key={index}>
                    <div className="messenger-content_body-message-item-avatar">
                        <img src={user.avatar} alt="avatar"/>
                    </div>
                    <div className="messenger-content_body-message-item-content">
                        <div className="messenger-content_body-message-item-content-text">
                            <span>{item.message_content}</span>
                        </div>
                    </div>
                </div>)
            })}
        </div>
    )
})