import React from 'react';
import { NavLink } from 'react-router-dom';
import icon from '../Footer/icons/bat.jpg'

export default function NavBar() {
    return (
        <header className="navbar navbar-light bg-dark" style={{marginBottom: "100px", position: "fixed", top: "0", width: "100%", opacity: "0.8"}}>
        
            <nav> 
                <img src={icon} style={{maxWidth: "35px", marginLeft: "20px"}}/>
                <NavLink exact to="/" style={{color:  "white", textDecoration: "none", padding: "0 30px 0 30px"}}>Home</NavLink>
                <NavLink to="/favs"  style={{color:  "white", textDecoration: "none"}}>Favorites</NavLink>
            </nav>
        </header>
    )
}