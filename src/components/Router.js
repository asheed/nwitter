import { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true); // 처음은 로그인하지 않은 상태로 초기화
    return (
        <Router>
            <Routes>
                {isLoggedIn ? (
                    <Route path="/" element={<Home/>} />
                ) : (
                    <Route path="/" element={<Auth/>} />
                )}
            </Routes>
        </Router>);
};

export default AppRouter;