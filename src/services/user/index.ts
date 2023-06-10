import axios from 'axios';
import config from "../../config";

export const getUserInfo =  () : Promise<any> => {
   const token : string | null = localStorage.getItem('token')
    return new Promise((resolve, reject) => {
        axios
            .get(`${config.apiUrl}/info/me`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => res.data)
            .then((data) => {
                if (data.status !== 'success') {
                    reject(data.message)
                } else {
                    resolve(data.data)
                }
            })
            .catch((err) => {
                reject(err.message)
            });
    })
}