import { createAction} from "@reduxjs/toolkit";

interface SetUserNamePayload {
    name: string;
}

interface SetUserIdPayload {
    id: string;
}

interface SetUserTokenPayload {
    token: string;
}

interface SetUserAvatarPayload {
    avatar: string;
}

interface SetUserAvatarColorPayload {
    color: string;
}

export const setUserName = createAction<SetUserNamePayload>('user/SET_USERNAME');
export const setUserId = createAction<SetUserIdPayload>('user/SET_USERID');
export const setUserToken = createAction<SetUserTokenPayload>('user/SET_USERTOKEN');
export const setUserAvatar = createAction<SetUserAvatarPayload>('user/SET_USERAVATAR');
export const setUserAvatarColor = createAction<SetUserAvatarColorPayload>('user/SET_USERAVATARCOLOR');
export const setUserData = createAction('user/SET_USERDATA', (payload: {
    userId: string;
    userName: string;
    userToken: string;
    userAvatar: string;
    userAvatarColor: string;
}) => {
    return {
        payload: payload
    }
});