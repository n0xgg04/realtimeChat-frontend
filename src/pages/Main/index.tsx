import React from 'react';
import { batch, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './style.scss';
import './responsive.scss'
import ListChat from '../../layouts/listChat';
import ChatContent from '../../layouts/ChatContent';
import ChatInfos from '../../layouts/ChatInfos';
import SideBar from '../../layouts/SideBar';
import Chat from '../../layouts/ChatContainer';
import { getUserInfo } from '../../services/user';
import userInit from '../../services/user/init'
import { useParams } from "react-router-dom"
import { getChatList as getConversations } from "../../services/chat/getData"
import socketIOClient from "socket.io-client";
import config from "../../config"

export const SocketContext = React.createContext<any>(null);

export default React.memo(function Main() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { conversationId } = useParams();
    const socketRef = React.useRef<any>(null);
    const userIdRef = React.useRef<any>(null);

    React.useEffect(() => {
        socketRef.current = socketIOClient(config.apiUrl);
        socketRef.current.emit('online', {token: localStorage.getItem('token')});
        getUserInfo().then((res: any) => {
            userIdRef.current = res.user_id;
            userInit(dispatch, res);
        }).catch((err: any) => {
            navigate('/login');
        });

        socketRef.current.on('receive-message', (data: any) => {
            document.title = 'New message'
            setTimeout(() => {
                document.title = 'Messenger'
            }, 5000)
            dispatch({
                type: "conversation/addMessageToConversation",
                payload: {
                    conversation_id: data.conversation_id,
                    message: {
                        message_id : data.message_id || "",
                        message_content: data.message_content,
                        message_sender: data.sender_id,
                        message_time : data.message_time
                    }
                }
            })
        });

        return () => {
            socketRef.current.disconnect();
        };
    }, []);

    React.useEffect(() => {
        batch(() => {
            getConversations().then((res: any) => {
                dispatch({
                    type: "conversation/loadConversationList",
                    payload: {
                        conversationList: res
                    }
                });
            }).catch((err: any) => {
                navigate('/login');
            });
            console.log("Not re-render 2")
        });

        return () => {
            console.log('Main unmount' + conversationId)
        };
        // eslint-disable-next-line
    }, []);

    return (
        <Chat>
            <SocketContext.Provider value={socketRef.current}>
                <SideBar />
                <ListChat />
                <ChatContent />
                <ChatInfos />
            </SocketContext.Provider>
        </Chat>
    );
});
