import React from 'react';
import './Navbar.module.css'
import c from './Navbar.module.css';


function Navbar() {
    return (
        <nav className={c.nav}>
            <div className={c.nav_Item}>
                <a href="#">Profile</a>
            </div>
            <div className={c.nav_Item}>
                <a href="#">Messages</a>
            </div>
            <div className={c.nav_Item}>
                <a href="#">News</a>
            </div>
            <div className={c.nav_Item}>
                <a href="#">Music</a>
            </div>
            <div className={c.nav_Item}>
                <a href="#">Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;