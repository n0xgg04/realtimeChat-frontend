import React from "react";
import ItemInbox from "./ItemInbox";

export default function ListUserInbox() : JSX.Element{
    return (
        <>
            <ul>
                <ItemInbox avatar={""} lastMessage={"You : vcl"} name={"Quân Đào"} key={1}/>
            </ul>
        </>
    )
}