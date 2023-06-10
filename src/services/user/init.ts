import {setUserData} from "../../redux/actions/user";

export default function userInit(dispatch : any, data : any){
    dispatch(setUserData({
        user_id : data.user_id,
        username : data.username,
        avatar : data.avatar,
        token : localStorage.getItem('token') as string,
        isCreatingConversation : false,
        conversationOpening : null,
    }));
}