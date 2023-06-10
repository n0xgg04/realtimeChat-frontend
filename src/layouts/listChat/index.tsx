import ListUserInbox from "./components/ListUserInbox";
import SearchBar from "../../components/searchBar";
import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {IoCreateOutline} from "react-icons/io5";

export default function ListChat() : JSX.Element{
    const user = useSelector((state : any) => state.user);
    const dispatch = useDispatch();

    const newChat = () => {
        dispatch({type : "user/setIsCreateConversation", payload : !user.isCreatingConversation})
    }

    React.useEffect(() => {

    },[user])
    return (
        <div className="messenger_list select-none">
            <div className="pt-[10px] w-full px-[15px]">
                <div className="flex items-center justify-between">
                    <span className="text-[#000] text-[1.5em] tx-bold-600">Chats</span>
                    <div onClick={newChat} className="rounded-full h-[30px] w-[30px] bg-[#eee] grid place-items-center cursor-pointer">
                        <IoCreateOutline className="text-[1em]"/>
                    </div>
                </div>
                <SearchBar/>
            </div>
           <ListUserInbox/>
        </div>
    )
}