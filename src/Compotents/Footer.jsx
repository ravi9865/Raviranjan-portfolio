import React from "react";
export default function Footer(props){
    return(
        <footer className="footer height9" style={{ backgroundColor: props.active ? "black" : "white", color: props.active ? "white" : "black" }}>
            Made by Raviranjan Sharma with '🧡' |  All Rights Reserved ©️ Copyright 2023
        </footer>
    )
}