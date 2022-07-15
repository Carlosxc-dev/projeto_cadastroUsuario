import React from 'react'
import './app.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import Logo from '../components/template/Logo'
import Nav from '../components/template/nav'
import Footer from '../components/template/footer'
import Routes from './routes'
import { HashRouter } from 'react-router-dom'


export default props =>
    <HashRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </HashRouter>

