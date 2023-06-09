import React from "react";
export default function SearchBar() : JSX.Element{
    return (
        <div className="flex flex-row w-full justify-center py-[10px]">
            <input className="rounded-full text-[16px] focus:outline-none bg-[#ebeef0] py-[5px] px-[10px] w-full" type="text" placeholder="Search"/>
        </div>
    )
}