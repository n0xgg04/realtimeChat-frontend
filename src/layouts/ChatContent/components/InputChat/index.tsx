import {AiOutlinePlus} from "react-icons/ai";
import {BsCardImage, BsFiletypeGif} from "react-icons/bs";
import {LuSticker} from "react-icons/lu";
import {IoSend} from "react-icons/io5";
import React from "react";
import {createNewConversation, sendMessage as userSendMessage} from "../../../../services/chat/chatController";
import {useSelector, useDispatch} from "react-redux";
import {send} from '../../../../services/chat/send'
import {useParams} from "react-router-dom";
import {SocketContext} from "../../../../pages/Main";
import {useContext} from "react";

interface InputChatProps{
    createConversationToUsername : any
}

export default function InputChat({createConversationToUsername} : InputChatProps){
    const inputRef = React.useRef<HTMLInputElement>(null);
    const hiddenButton = React.useRef<any>(false);
    const user = useSelector((state : any) => state.user)
    const conversation = useSelector((state : any) => state.userConversationList).userConversationList
    const dispatch = useDispatch();
    const {conversationId} = useParams();
    const socketIO = useContext(SocketContext);

    React.useEffect(() => {
        if(inputRef.current){
            inputRef.current.focus();
        }
    }, [])



    const checkInputToHideIcon = (e : any) => {
        if(e.target.value.length > 0 && hiddenButton.current === false){
            hiddenButton.current = true;
            document.querySelectorAll('.willbehidden').forEach(
                (item:any) => {
                    item.classList.remove('animation-show')
                    item.classList.add('animation-hidden')
                    setTimeout(() => {
                        item.classList.add('hidden')
                    }, 150)
                }
            )
        }else if(e.target.value.length === 0 && hiddenButton.current === true){
            hiddenButton.current = false;
            console.log("show")
            document.querySelectorAll('.willbehidden').forEach(
                (item:any) => {
                    item.classList.remove('animation-hidden')
                    item.classList.add('animation-show')
                    setTimeout(() => {
                        item.classList.remove('hidden')
                    }, 150)
                }
            )
        }
    }

    const sendNewMessage = (e : any) => {
        e.preventDefault();
        if(user.isCreatingConversation){
            createNewConversation(conversation, user, createConversationToUsername, "", dispatch)
        }else{
            if(inputRef.current?.value.length === 0) return;
            socketIO.emit("send-message", {
                conversation_id : conversationId,
                message_content : inputRef.current?.value,
                token : user.token
            })
            let messageContent : string = inputRef.current?.value as string;
            send(messageContent, conversationId as string)
            inputRef.current!.value = "";

            userSendMessage(dispatch, user, {
                message_id : Math.random().toString(36).substring(7),
                message_content : messageContent,
                message_sender : user.username,
                user_id : user.user_id,
                message_time : new Date().getTime().toLocaleString(),
            })
        }
    }

    return (
        <div className="messenger-content_input ">
            <div className="messenger-content_input-item alg-self-center cursor-pointer">
                <AiOutlinePlus className="input-item-circle flex-to-mid"/>
            </div>
            <div className="messenger-content_input-item-2 flex-to-mid cursor-pointer willbehidden">
                <BsCardImage/>
            </div>
            <div className="messenger-content_input-item-2 flex-to-mid cursor-pointer willbehidden">
                 <LuSticker/>
            </div>
            <div className="messenger-content_input-item-2 flex-to-mid cursor-pointer willbehidden">
                <BsFiletypeGif/>
            </div>
            <div className="messenger-content_input-item-2 flex-to-mid flx-grow rounded-full">
                <form className="w-full" onSubmit={sendNewMessage}>
                     <input onChange={checkInputToHideIcon} ref={inputRef} type="text" className="messenger-content_input-item-form text-black" placeholder="Aa"/>
                </form>
            </div>
            <div onClick={sendNewMessage} className="cursor-pointer messenger-content_input-item-2 flex-to-mid">
                <IoSend/>
            </div>
        </div>
    )
}