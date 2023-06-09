import {
    BrowserRouter,
    Route, Routes,
} from "react-router-dom";

import Login from "../pages/Login";
import Main from "../pages/Main/index";
import Test from "../pages/Test"

function RouterPage() : JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/test" element={<Test/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RouterPage;