import {
    setUserAvatar,
    setUserAvatarColor,
    setUserId,
    setUserName,
    setUserToken,
} from "./user";
import {
    addMessages,
    setParnerId,
    setPartnerAvatar,
    setPartnerAvatarColor,
    setPartnerLastSeen,
    setPartnerName,
    setPartnerOnline,
    setPartnerTyping,
} from "./chat";

interface UserActions {
    setUserName: typeof setUserName;
    setUserId: typeof setUserId;
    setUserToken: typeof setUserToken;
    setUserAvatar: typeof setUserAvatar;
    setUserAvatarColor: typeof setUserAvatarColor;
}

interface ChatActions {
    setParnerId: typeof setParnerId;
    setPartnerName: typeof setPartnerName;
    setPartnerAvatar: typeof setPartnerAvatar;
    setPartnerAvatarColor: typeof setPartnerAvatarColor;
    setPartnerOnline: typeof setPartnerOnline;
    setPartnerTyping: typeof setPartnerTyping;
    setPartnerLastSeen: typeof setPartnerLastSeen;
    addMessages: typeof addMessages;
}

interface AllActionsInterface {
    user: UserActions;
    chat: ChatActions;
}

const user: UserActions = {
    setUserName,
    setUserId,
    setUserToken,
    setUserAvatar,
    setUserAvatarColor,
};

const chat: ChatActions = {
    setParnerId,
    setPartnerName,
    setPartnerAvatar,
    setPartnerAvatarColor,
    setPartnerOnline,
    setPartnerTyping,
    setPartnerLastSeen,
    addMessages,
};

const AllActions: AllActionsInterface = {
    user,
    chat,
};

export default AllActions;
export { user };
export { chat };
