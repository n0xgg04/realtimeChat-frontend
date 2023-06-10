import React from "react";
import './styles.scss'
import {IoIosCall} from "react-icons/io";
import {BsFillCameraVideoFill} from "react-icons/bs";
import {useSelector} from "react-redux";
const testAvt : string = "https://cdn.sforum.vn/sforum/wp-content/uploads/2022/04/p2.jpg"

export default function ChatInfo(){

    const user = useSelector((state : any) => state.user)
    const conversation = useSelector((state : any) => state.userConversationList).userConversationList


    return (
        <div className="messenger-info h-100vh bdr-l-1s-eee">
            { (!user.isCreatingConversation && user.conversationOpening !== null) && (
                <div className="messenger-info_head h-100vh">
                    <div className="messenger-info_head-avatar g-center">
                        <img src={testAvt} alt="avatar"/>
                    </div>
                    <div className="messenger-info_head-name flx-row-c">
                        <span className="tx-bold-500 tx-sz-95">{conversation[user.conversationOpening].conversation_name}</span>
                        <span className="tx-sz-75 tx-clr-stt">Đang hoạt động</span>
                    </div>
                    <div className="messenger-info_head-quickAction flx-row-c-c mg-t-10px flx-gap-10px">
                        <div className="messenger-info_head-quickAction--item flx-clm-c flx-gap-10px cursor-pointer">
                            <div className="sp-circle bg-clr-eee h-40px w-40px g-center">
                                <IoIosCall className="action-icon tx-sz-115"/>
                            </div>
                            <span className="tx-sz-75 tx-clr-stt">Call</span>
                        </div>
                        <div className="messenger-info_head-quickAction--item flx-clm-c flx-gap-10px cursor-pointer">
                            <div className="sp-circle w-40px h-40px bg-clr-eee g-center">
                                <BsFillCameraVideoFill className="action-icon tx-sz-115"/>
                            </div>
                            <span className="tx-sz-75 tx-clr-stt">Video call</span>
                        </div>
                    </div>
                    <div className="messenger-info_head-name-action flx-clm mg-l-20px flx-gap-10px mg-t-30px">
                        <div className="messenger-info_head-name-action_info tx-sz-90 cursor-pointer">Chat Infomations</div>
                        <div className="messenger-info_head-name-action_media tx-sz-90 cursor-pointer">Files and photos</div>
                        <div className="messenger-info_head-name-action_search tx-sz-90 cursor-pointer">Search in conversation</div>

                    </div>
                </div>
            )}
        </div>
    )
}