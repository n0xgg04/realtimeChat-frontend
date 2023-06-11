import {
    BrowserRouter,
    Route, Routes,
} from "react-router-dom";

import Login from "../pages/Login";
import Main from "../pages/Main/index";
import Test from "../pages/Test"
import {configureStore} from "@reduxjs/toolkit";
import allReducers from "../redux/reducers";
import { Provider } from "react-redux";

const store  = configureStore({
    reducer: allReducers,
});

function RouterPage() : JSX.Element {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/t/:conversationId" element={<Main/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/test" element={<Test/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default RouterPage;