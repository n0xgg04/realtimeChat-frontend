import {IoCall, IoSend} from "react-icons/io5";
import {BsCameraVideoFill, BsCardImage, BsFiletypeGif} from "react-icons/bs";
import {AiOutlinePlus} from "react-icons/ai";
import {LuSticker} from "react-icons/lu";
import ChatHistory from "./components/ChatHistory";
import './styles.scss'
import React from "react";
import {HiOutlineDotsHorizontal} from "react-icons/hi";
import {useSelector, useDispatch} from "react-redux";
import {createNewConversation, sendMessage as userSendMessage} from "../../services/chat/chatController";

const testAvt : string = "https://cdn.sforum.vn/sforum/wp-content/uploads/2022/04/p2.jpg"



export default React.memo(function ChatContent() {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const user = useSelector((state : any) => state.user)
    const conversation = useSelector((state : any) => state.userConversationList).userConversationList
    const dispatch = useDispatch();
    const createConversationToUsername = React.useRef<HTMLInputElement>(null);


    const changeInfoShow = (e: React.ChangeEvent<HTMLInputElement>) => {
        let messenger = document.querySelector('.messenger') as HTMLElement;
        if (!e.target.checked) {
            messenger.style.gridTemplateAreas = "'side list chat chat'";
            messenger.style.gridTemplateColumns = "50px 20% auto 20%";
        } else {
            messenger.style.gridTemplateAreas = "'side list chat'";
            messenger.style.gridTemplateColumns = "50px 20% auto";
        }
    }

    const sendMessage = () => {
        if(user.isCreatingConversation){
            console.log("Add new con ",conversation)
            createNewConversation(conversation, user, createConversationToUsername, testAvt, dispatch)
        }else{
            userSendMessage(dispatch, user.conversationOpenening, {
                message_id : Math.random().toString(36).substring(7),
                message_content : inputRef.current?.value as string,
                message_sender : user.username,
                message_time : new Date().getTime().toLocaleString(),
            })
        }
    }

    console.log("All conversation:",conversation)

return (
    <div className="messenger-content">
        <div className="messenger-content_head flx-clm">
            <div className="messenger-content_head-user w-full">
                { (!user.isCreatingConversation) ? (
                    <>
                        {user.conversationOpening !== null && (
                            <>
                                <div className="messenger-content_head-avatar g-center">
                                    <img src={testAvt} alt="avatar"/>
                                </div>
                                <div className="messenger-content_head-info">
                                    <span className="messenger-content_head-info_name tx-sz-85 tx-bold-500">{conversation[user.conversationOpening].conversation_name}</span>
                                    <span className="messenger-content_head-info-active">Active</span>
                                </div>
                            </>
                            )}
                    </>) :
                        <div className="flex flex-row w-full items-center">
                          <label className="text-[0.9em]" htmlFor="toUser">Đến: </label>
                          <input ref={createConversationToUsername} id="toUser" type="text" className="pl-[5px] text-[0.9em] messenger-content_head-user-input focus:outline-none w-full" placeholder="Nhập tên người dùng"/>
                        </div>}
            </div>
            <div className="messenger-content_head-action flx-row">
                { (!user.isCreatingConversation && user.conversationOpening !== null) && (
                    <>
                        <div className="messenger-content_head-action_call cr-p"><IoCall className="action-icon"/></div>
                        <div className="messenger-content_head-action_videocall cr-p"><BsCameraVideoFill className="action-icon"/></div>
                        <input onChange={changeInfoShow} type="checkbox" name="hideShowInfo" id="hideShowInfo" hidden/>
                        <label htmlFor="hideShowInfo" className="messenger-content_head-action_info cr-p"><HiOutlineDotsHorizontal style={{
                            fontSize: "1.2rem",
                            color: "#fff"
                        }} className="action-icon"/></label>
                    </>
                    )
                }
            </div>
        </div>
        <div className="messenger-content_body">
            { (!user.isCreatingConversation && user.conversationOpening !== null) ? (
            <ChatHistory/>
            ) :
                <span className="text-[#aaa9a9] text-[0.9em] g-center">
                    Chưa mở cuộc trò chuyện nào hoặc đang tạo cuộc trò chuyện mới
                </span>
            }

        </div>
        <div className="messenger-content_input ">
            <div className="messenger-content_input-item alg-self-center">
                <AiOutlinePlus className="input-item-circle flex-to-mid"/>
            </div>
            <div className="messenger-content_input-item-2 flex-to-mid">
                <BsCardImage/>
            </div>
            <div className="messenger-content_input-item-2 flex-to-mid">
                <LuSticker/>
            </div>

            <div className="messenger-content_input-item-2 flex-to-mid">
                <BsFiletypeGif/>
            </div>
            <div className="messenger-content_input-item-2 flex-to-mid flx-grow rounded-full">
                <input ref={inputRef} type="text" className="messenger-content_input-item-form text-black" placeholder="Aa"/>
            </div>
            <div onClick={sendMessage} className="cursor-pointer messenger-content_input-item-2 flex-to-mid">
                <IoSend/>
            </div>
        </div>
    </div>
    )
})
