import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import PropsChild from "./Compotents/PropsChild";
import Login from "./Compotents/Login";
import "./Css/index.css";
import "./Css/tablet.css";
import "./Css/mobile.css";
import "./Css/greatertablet.css"
export default function App() {
    return (
        <Router>
            <Link to='/'></Link>
            <Link to='/login'></Link>

            <Routes>
                <Route path='/' element={<PropsChild></PropsChild>} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </Router>
    )
}