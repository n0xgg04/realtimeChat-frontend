import React from 'react';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './style.scss';
import './responsive.scss'
import ListChat from '../../layouts/listChat';
import ChatContent from '../../layouts/ChatContent';
import ChatInfos from '../../layouts/ChatInfos';
import SideBar from '../../layouts/SideBar';
import Chat from '../../layouts/ChatContainer';
import {getUserInfo} from '../../services/user';
import userInit from '../../services/user/init'


export default function Main() {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    React.useEffect(() => {
        getUserInfo().then((res : any) => {
            userInit(dispatch, res)
        }).catch((err : string) => {
            navigate('/login');
        })

        return () => {
            console.log('Main unmount');
        };
    }, [dispatch, navigate]);

    return (
        <Chat>
            <SideBar />
            <ListChat />
            <ChatContent />
            <ChatInfos />
        </Chat>
    );
}
