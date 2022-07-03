import React from "react";
import "./app.css"

import Logo from "../components/template/Logo";
import Nav from "../components/template/nav";
import Main from "../components/template/main";
import Footer from "../components/template/footer";


export default props => {
    <div className="app">
        <Logo/>
        <Main/>
        <Nav/>
        <Footer/>
    </div>
}