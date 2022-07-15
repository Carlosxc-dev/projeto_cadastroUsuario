import React from "react"; 
import { Routes, Route } from "react-router-dom";
import Home from "../components/home/home";
import Usercrud from "../components/user/usercrud";

export default props => 
    <Routes>
        <Route exact path="/" component={<Home />} />
        <Route path="/users" component={<Usercrud />} />
        <Route from="*" to={<Home />} />
    </Routes>


