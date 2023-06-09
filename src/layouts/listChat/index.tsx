import ListUserInbox from "./components/ListUserInbox";
import SearchBar from "../../components/searchBar";
import React from "react";
export default function ListChat() : JSX.Element{
    return (
        <div className="messenger_list select-none">
            <div className="pt-[10px] w-full px-[15px]">
                <div className="">
                    <span className="text-[#000] text-[1.5em] tx-bold-600">Chats</span>
                </div>
                <SearchBar/>
            </div>
           <ListUserInbox/>
        </div>
    )
}