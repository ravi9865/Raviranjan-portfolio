import React from "react";
import Img1 from "../Assets/Img/profile-logo.png";
import Img2 from "../Assets/Img/mode.avif";

export default function TopNav(props) {
    console.log(props.active);
    return (
        // style={{ backgroundColor: active ? "black" : "white", color: active ? "white" : "black" }} 
        <nav className="topnav height9" style={{ backgroundColor: props.active ? "black" : "white", color: props.active ? "white" : "black" }}>
            <div className="nav-logo">
                
                <h1>{props.active}</h1>
                <img src={Img1} alt="Profile-logo"></img>
                <h2>Sharmaji</h2>
            </div>
            <div className="bac-mode">
            {/* onClick={handleClick} */}
                <img onClick={props.handleClick} src={Img2} alt="Background-mode" />
            </div>

        </nav>
    )
}