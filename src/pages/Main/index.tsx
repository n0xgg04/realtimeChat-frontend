import './style.scss'
import React from 'react';
//!Components
import ListChat from "../../layouts/listChat";
import ChatContent from "../../layouts/ChatContent";
import ChatInfos from "../../layouts/ChatInfos";
import SideBar from "../../layouts/SideBar";
import Chat from "../../layouts/ChatContainer";
import {useDispatch} from "react-redux";
import axios from "axios";
import config from "../../config";
import { useNavigate } from 'react-router-dom';

export default function Main(){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    React.useEffect(() => {
        function SetUserData(data: any, access_token: string = "") : void {
            dispatch({
                type: "SET_USERDATA",
                payload: {
                    userId: data.user_id,
                    userName: data.username,
                    userToken: access_token,
                    userAvatar: data.avatar,
                    userAvatarColor: "#000"
                }
            })
        }

        axios.get(`${config.apiUrl}/info/me`, {
            headers: {
                Authorization : `Bearer ${localStorage.getItem("token")}`
            },
        }).then((res) => {
            return res.data;
        }).then((data) => {
            if(data.status !== "success"){
                navigate('/login');
            }else {
                SetUserData(data.data, localStorage.getItem("token") as string);
                console.log(data)
            }
        }).catch((err) => {
            navigate('/login');
        })

        return () => {
            console.log("Main unmount")
        }
    },[dispatch, navigate])

    return (
            <Chat>
                <SideBar/>
                <ListChat/>
                <ChatContent/>
                <ChatInfos/>
            </Chat>
    );
}