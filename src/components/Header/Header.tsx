import React from 'react';
import './Header.module.css';
import c from './Header.module.css';

export const headerData = {
    logo: 'https://png.pngtree.com/png-vector/20191206/ourlarge/pngtree-panda-vector-logo-design-png-image_2076518.jpg'

}
type headerDataType = {
    logo: string
}

function Header(props: headerDataType) {
    return (
        <div className={c.header}>
            <img className={c.logo} src={props.logo}
                 alt='Logo'/>

        </div>
    );
}
export default Header;