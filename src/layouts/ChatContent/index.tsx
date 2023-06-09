import {IoCall, IoSend} from "react-icons/io5";
import {BsCameraVideoFill, BsCardImage, BsFiletypeGif} from "react-icons/bs";
import {AiOutlinePlus} from "react-icons/ai";
import {LuSticker} from "react-icons/lu";
import ChatHistory from "./components/ChatHistory";
import './styles.scss'
import React from "react";
import {HiOutlineDotsHorizontal} from "react-icons/hi";

const testAvt : string = "https://cdn.sforum.vn/sforum/wp-content/uploads/2022/04/p2.jpg"

export default function ChatContent() {
    const inputRef = React.useRef<HTMLInputElement>(null);
    React.useEffect(() => {
    },[])
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


return (
    <div className="messenger-content">
        <div className="messenger-content_head flx-clm">
            <div className="messenger-content_head-user">
                <div className="messenger-content_head-avatar g-center">
                    <img src={testAvt} alt="avatar"/>
                </div>
                <div className="messenger-content_head-info">
                    <span className="messenger-content_head-info_name tx-sz-85 tx-bold-500">Quân Đào</span>
                    <span className="messenger-content_head-info-active">Active</span>
                </div>
            </div>
            <div className="messenger-content_head-action flx-row">
                <div className="messenger-content_head-action_call cr-p"><IoCall className="action-icon"/></div>
                <div className="messenger-content_head-action_videocall cr-p"><BsCameraVideoFill className="action-icon"/></div>
                <input onChange={changeInfoShow} type="checkbox" name="hideShowInfo" id="hideShowInfo" hidden/>
                <label htmlFor="hideShowInfo" className="messenger-content_head-action_info cr-p"><HiOutlineDotsHorizontal style={{
                    fontSize: "1.2rem",
                    color: "#fff"
                }} className="action-icon"/></label>
            </div>
        </div>
        <div className="messenger-content_body">
            <ChatHistory history={[
                {
                    avatar: testAvt,
                    message: "Hello",
                    name: "Quân Đào",
                    time: "10:00",
                    isYou: false
                },
                {
                    avatar: testAvt,
                    message: "Hello",
                    name: "Quân Đào",
                    time: "10:00",
                    isYou: true
                },
            ]}/>
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
            <div className="cursor-pointer messenger-content_input-item-2 flex-to-mid">
                <IoSend/>
            </div>
        </div>
    </div>
    )
}
