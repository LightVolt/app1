import React from "react";
import './navlink.css'
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Products from "./products";
import Member from "./member";
import Home from "./home";


export default function Router3(){
    return (
        <BrowserRouter>
            <nav className="nav">
                <NavLink to='/'
                    className={({ isActive }) => isActive ? "active_menu" : "menu"}
                    style={({ isActive }) => { return { fontWeight: isActive ? "bold" : "" }; }}>Home</NavLink> -&nbsp;
                <NavLink to='products' className={({ isActive }) => isActive ? "active_menu" : "menu"}>
                    Products</NavLink> -&nbsp;
                <NavLink to='member' className={({ isActive }) => isActive ? "active_menu" : "menu"}>
                    Member</NavLink> -&nbsp;
                <NavLink to='contact' className={({ isActive }) => isActive ? "active_menu" : "menu"}>
                    Contact</NavLink>
            </nav>
            <Routes style={{margin:'20px'}}>
                <Route path="/" Component={Home}/>
                <Route path="/products" Component={Products}/>
                <Route path="/member" Component={Member}/>
                <Route path="/contact" element={<div style={{textAlign:'center'}}>Contact Page</div>}/>
                <Route path="/*" element={"Error 404 Not Found"}/>
            </Routes>
        </BrowserRouter>

    )
}