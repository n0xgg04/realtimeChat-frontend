import React from 'react';
import InputForm from '../../components/InputForm';
import LogoImage from '../../components/LogoImage';
import axios from 'axios';
import './styles.scss'
import config from '../../config';
import {useNavigate} from "react-router-dom";


export default function Login(): JSX.Element {
    const usernameRef = React.useRef<HTMLInputElement>(null);
    const passwordRef = React.useRef<HTMLInputElement>(null);
    const warning = React.useRef<string>("");
    const [showWarning, setShowWarning] = React.useState<boolean>(false);
    const navigate = useNavigate();
    const handLogin = () => {
        console.log("Login", usernameRef.current?.value, passwordRef.current?.value)
        axios.post(`${config.apiUrl}/auth/login`, {
            username: usernameRef.current?.value,
            password: passwordRef.current?.value
        }).then((res) => {
            return res.data;
        }).then((data) => {
            if (data.status === "error") {
                warning.current = data.message;
                setShowWarning(true);
            } else {
                localStorage.setItem("token", data.token);
                navigate('/')
            }
        }).catch((err) => {
            console.log(err);
        })
    }


    return (
        <>
            <div className="wh-full g-center">
                <div className="wh-90pc flx-clm-c-c">
                    <div className="login-page-box-logo mg-b-20px">
                        <LogoImage/>
                    </div>
                    <div className="login-page-box-title">
                        <h2 className="tx-sz-40px tx-w-400">Kết nối với những cặp sừng</h2>
                    </div>
                    <div className="login-page-box-form flx-clm-c-c mg-t-20px mg-b-20px">
                        {
                            showWarning && (
                                <div className="py-[20px] warning text-[15px] text-red-600 justify-center items-center">
                                    {warning.current}
                                </div>
                            )
                        }
                        <form onSubmit={(e : any) => {
                            e.preventDefault();
                        }}>
                            <InputForm inputRef={usernameRef} type="text" placeholder="Email hoặc số điện thoại"/>
                            <InputForm inputRef={passwordRef} type="password" placeholder="Mật khẩu"/>
                            <div className="login-page-box-form-btn g-center mg-t-30px">
                                <button className="cr-p" onClick={handLogin}>Đăng nhập</button>
                            </div>
                        </form>
                     </div>
                </div>
            </div>
        </>
    )
}