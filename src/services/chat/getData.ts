import axios from 'axios';
import config from '../../config';

export const getChatList  = async () => {
    try {
        const response = await axios.get(`${config.apiUrl}/chat/`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        return response.data.data;
    }catch(err){
        throw err;
    }
}