import React from "react";
import Img1 from "../Assets/Img/profile-phots/9.png";
import Img2 from "../Assets/Img/phone-logo.png";
import Img3 from "../Assets/Img/whatupp_logo.webp";
import Img4 from "../Assets/Img/gmail_logo.png";
import Resume from "../Assets/Img/RaviranjanSharma.pdf";
export default function Navbar(props) {
  return (
    <article
      className="navbar"
      style={{
        backgroundColor: props.active ? "black" : "white",
        color: props.active ? "white" : "black",
      }}
    >
      <img id="profile-photo" src={Img1} alt="profile-pic" />
      <h1>Raviranjan Sharma</h1>
      {/* <p className="auto-text">I'm a <span className="element"></span></p> */}
      <p>
        I am seeking a Software Engineering role, adept at crafting secure,
        scalable software solutions. Proficient in various programming languages
        and tools, I am eager to join innovative projects and collaborate with
        talented teams
      </p>
      <h4>turning ideas into real life product is my callings...</h4>

      <h3>Download</h3>
      <a href={Resume} download>
        <button className="resume-btn" rel="noopener noreferrer">
          Resume
        </button>
      </a>

      <h3>Connect Us</h3>
      <div className="connect-us">
        <a href="tel:7703833281" target="_blank" rel="noopener noreferrer">
          <img src={Img2} id="phone" alt="phone-logo"></img>
        </a>
        <a
          href="https://wa.me/917703833281"
          target="_blank"
          className="whatupp"
          rel="noopener noreferrer"
        >
          <img src={Img3} alt="whatup-logo"></img>
        </a>
        <a
          href="mailto:RAVIRA_209098@SAITM.ORG"
          target="_blank"
          className="gmail"
          rel="noopener noreferrer"
        >
          <img id="gmail" src={Img4} alt="gmail-logo"></img>
        </a>
      </div>
    </article>
  );
}