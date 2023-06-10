import React from 'react';
import InputForm from '../../components/InputForm';
import LogoImage from '../../components/LogoImage';
import './styles.scss'
import {useNavigate} from "react-router-dom";
import {login} from "../../services/auth";


export default function Login(): JSX.Element {
    const usernameRef = React.useRef<HTMLInputElement>(null);
    const passwordRef = React.useRef<HTMLInputElement>(null);
    const warning = React.useRef<string>("");
    const [showWarning, setShowWarning] = React.useState<boolean>(false);
    const navigate = useNavigate();
    const handLogin = async() => {
        await login(usernameRef.current?.value as string, passwordRef.current?.value as string,
            (token: string) => {
                console.log("Login success", token)
                navigate('/')
        }, (message : string) => {
                warning.current = message;
                setShowWarning(true);
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