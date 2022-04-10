import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';
import {NavLinkDataType} from "../../redux/navbar-reducer";
import MainLogo from './../assets/images/921305.png'


type NavbarPropsType = {
    myState: Array<NavLinkDataType>
}

function Navbar({myState}: NavbarPropsType) {

    let NavLinkElements = myState.map(n => {
        return (
            <div key={n.id} className={s.item}>
                <NavLink to={n.path}
                         className={navData => navData.isActive ? s.active : s.item}>
                    {n.title}
                </NavLink>
            </div>
        )
    })

    return (
        <nav className={s.nav}>
            <div className={s.headerLogo}>
                <img src={MainLogo} alt="Logo" className={s.logo}/>
                <span>SocialNetwork</span>
            </div>
            {NavLinkElements}
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