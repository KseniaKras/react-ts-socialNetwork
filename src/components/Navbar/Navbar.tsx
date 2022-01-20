import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.module.css'
import c from './Navbar.module.css';
import {v1} from "uuid";

type NavLindData = {
    id: number
    path: string
    title: string
}

function Navbar() {
    const NavLinkData = [
        {id: v1(), path: '/profile', title: 'Profile'},
        {id: v1(), path: '/dialogs', title: 'Messages'},
        {id: v1(), path: '/news', title: 'News'},
        {id: v1(), path: '/music', title: 'Music'},
        {id: v1(), path: '/settings', title: 'Settings'},
    ]

    return (
        <nav className={c.nav}>
            {NavLinkData.map(n => {
                return (
                    <div key={n.id} className={c.item}>
                        <NavLink to={n.path}
                                 className={navData => navData.isActive ? c.active : c.item}>
                            {n.title}
                        </NavLink>
                    </div>
                )
            })}
        </nav>
    );
}

export default Navbar;

/*return (
        <nav className={c.nav}>
            <div className={c.nav_item}>
                <NavLink to="/profile" className={a => a.isActive ? c.nav_active : c.nav_item}>Profile</NavLink>
            </div>
            <div className={c.nav_item}>
                <NavLink to='/dialogs' className={a => a.isActive ? c.nav_active : c.nav_item}>Messages</NavLink>
            </div>
            <div className={c.nav_item}>
                <NavLink to='/news' className={a => a.isActive ? c.nav_active : c.nav_item }>News</NavLink>
            </div>
            <div className={c.nav_item}>
                <NavLink to='/music' className={a => a.isActive ? c.nav_active : c.nav_item}>Music</NavLink>
            </div>
            <div className={c.nav_item}>
                <NavLink to='/settings' className={a => a.isActive ? c.nav_active : c.nav_item}>Settings</NavLink>
            </div>
        </nav>
    );*/