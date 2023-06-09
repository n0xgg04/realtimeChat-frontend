import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import config from '../../config';
import { useNavigate } from 'react-router-dom';

import './style.scss';
import ListChat from '../../layouts/listChat';
import ChatContent from '../../layouts/ChatContent';
import ChatInfos from '../../layouts/ChatInfos';
import SideBar from '../../layouts/SideBar';
import Chat from '../../layouts/ChatContainer';

import { setUserData } from '../../redux/actions/user';

export default function Main() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state : any) => state.user);

    React.useEffect(() => {
        axios
            .get(`${config.apiUrl}/info/me`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
            .then((res) => res.data)
            .then((data) => {
                if (data.status !== 'success') {
                    navigate('/login');
                } else {
                    console.log('Saved user data');

                    const userData = {
                        username: 'JohnDoe',
                        user_id: '123',
                        token: 'abc123',
                        avatar: 'avatar.png',
                    };

                    dispatch(setUserData(userData));
                }
            })
            .catch((err) => {
                navigate('/login');
            });

        return () => {
            console.log('Main unmount');
        };
    }, [dispatch, navigate]);

    console.log(user);
    return (
        <Chat>
            <SideBar />
            <ListChat />
            <ChatContent />
            <ChatInfos />
        </Chat>
    );
}
