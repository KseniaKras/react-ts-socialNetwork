import React from 'react';
import './Header.module.css';
import c from './Header.module.css';

type headerDataType = {
    logo: string
}

function Header(props: headerDataType) {
    return (
        <div className={c.header}>
            <img src={props.logo}
                 alt='Logo'
                 className={c.logo}/>

        </div>
    );
}

export default Header;