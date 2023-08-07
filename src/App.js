import React from "react";
import TopNav from "./Compotents/TopNav";
import Navbar from "./Compotents/Navbar";
import Content from "./Compotents/Content";
import Footer from "./Compotents/Footer";
import "./Css/index.css";
import "./Css/tablet.css";
import "./Css/mobile.css";
export default function App() {
    
    return (
        <section>
            <TopNav></TopNav>
            <Navbar></Navbar>
            <Content></Content>
            <Footer></Footer>
        </section>
    )
}