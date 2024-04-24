import React, { useState } from "react";
import Img1 from "../Assets/Img/profile-logo.png";
import Img2 from "../Assets/Img/mode.avif";
import { FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function TopNav(props) {
  const [showOptions, setShowOptions] = useState(false);
  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };
  // login page navigate
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };
  return (
    <nav
      className="topnav height9"
      style={{
        backgroundColor: props.active ? "black" : "white",
        color: props.active ? "white" : "black",
      }}
    >
      <div className="nav-logo">
        <h1>{props.active}</h1>
        <img src={Img1} alt="Profile-logo"></img>
      </div>
      <div className="bac-mode">
        <img onClick={props.handleClick} src={Img2} alt="Background-mode" />
        <div
          className="loginIcon"
          onClick={toggleOptions}
          style={{
            backgroundColor: props.active ? "black" : "white",
            color: props.active ? "white" : "black",
            border: props.active ? "2px solid white" : "2px solid black",
          }}
        >
          <FaUser />
          {showOptions && (
            <div
              className="loginOptions"
              style={{
                backgroundColor: props.active ? "black" : "black",
                color: props.active ? "white" : "black",
                border: props.active ? "2px solid white" : "2px solid white",
              }}
            >
              <h4 onClick={navigateToLogin}>Login Admin</h4>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
