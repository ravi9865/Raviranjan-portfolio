import React, { useState } from "react";
import TopNav from "./TopNav";
import Navbar from "./Navbar";
import Content from "./Content";
import Footer from "./Footer";
export default function PropsChild() {
    // background color and font color change
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    };
    
    // response message
    const [Display, setDisplay] = useState(false);
    const handleResponse = () => {
        setDisplay(true);
    };
    return (
        <section>
            <TopNav handleClick={handleClick} active={active}></TopNav>
            <Navbar active={active}></Navbar>
            <Content active={active} handleResponse={handleResponse} Display={Display}></Content>
            <Footer active={active}></Footer>
        </section>
    )
}