import axios from 'axios';
import config from "../../config";

export const login = async (username: string, password: string, whenSuccess : any, whenFailed : any) => {
    axios.post(`${config.apiUrl}/auth/login`, {
        username: username,
        password: password
    }).then((res) => {
        return res.data;
    }).then((data) => {
        if (data.status === "error") {
            whenFailed(data.message as string)
        } else {
            localStorage.setItem("token", data.token as string);
            whenSuccess(data.token as string)
        }
    }).catch((err) => {
        whenFailed("Unknown error")
    })
}