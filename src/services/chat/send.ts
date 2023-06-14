import axios from 'axios';
import config from '../../config';

export const send = async (message: string, conversationId : string | number) => {
    const token = localStorage.getItem('token');
    try {
        const response = await axios.post(
            `${config.apiUrl}/chat/send/${conversationId}`,
            {
                message: message,
                conversation_id: conversationId
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
        return response.data;
    }catch(err){
        console.log(err)
    }
}