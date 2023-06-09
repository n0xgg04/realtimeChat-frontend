import {BsThreeDots} from "react-icons/bs";
import {AiFillDelete, AiTwotonePushpin} from "react-icons/ai";
import {IoIosNotifications, IoMdArchive} from "react-icons/io";
import {IoCheckmarkDoneCircle} from "react-icons/io5";
import React from "react";

interface IItemUserProps {
    name : string,
    lastMessage : string,
    avatar : string
}
export default function ItemUser(Props : IItemUserProps) : JSX.Element{
    return (
        <li className="messenger-list_item w-full">
            <div className="messenger-list_item-avatar">
                <img src={Props.avatar} alt="avatar"/>
            </div>
            <div className="messenger-list_item-info w-full">
                <div className="messenger-list_item--name">
                    <span>{Props.name}</span>
                </div>
                <div className="messenger-list_item--lastMessage">
                    <span>{Props.lastMessage}</span>
                </div>
            </div>
            <div className="messenger-list_item--tool">
                <input id="tooltip-item" type="checkbox" className="messenger-list_item--tool-checkbox"/>
                <label htmlFor="tooltip-item" className="messenger-list_item--tool-icon">
                    <BsThreeDots/>
                </label>
                <div className="messenger-list_item--tool-tooltip">
                    <ul>
                        <li className="messenger-list_item--tool-tooltip-item">
                            <div className="icon-pin">
                                <AiTwotonePushpin className="iconIcon"/>
                            </div>
                            <span>Pin to top</span>
                        </li>
                        <li className="messenger-list_item--tool-tooltip-item">
                            <div className="icon-pin">
                                <IoIosNotifications className="iconIcon"/>
                            </div>
                            <span>Mute notifications</span>
                        </li>
                        <li className="messenger-list_item--tool-tooltip-item">
                            <div className="icon-pin">
                                <IoCheckmarkDoneCircle className="iconIcon"/>
                            </div>
                            <span>Mark as unread</span>
                        </li>
                        <li className="messenger-list_item--tool-tooltip-item">
                            <div className="icon-pin">
                                <IoMdArchive className="iconIcon"/>
                            </div>
                            <span>Archive</span>
                        </li>
                        <li className="messenger-list_item--tool-tooltip-item">
                            <div className="icon-pin">
                                <AiFillDelete className="iconIcon"/>
                            </div>
                            <span>Delete</span>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
    )
}