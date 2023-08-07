import React from "react";
import Img1 from "../Assets/Img/profile-logo.png";
import Img2 from "../Assets/Img/mode.avif";

export default function TopNav() {
    return (
        <nav class="topnav height9">
            <div class="nav-logo">
                <img src={Img1} alt="Profile-logo"></img>
                <h2>Sharmaji</h2>
            </div>
            <div className="bac-mode">
                <img src={Img2} alt="Background-mode" />
            </div>

        </nav>
    )
}