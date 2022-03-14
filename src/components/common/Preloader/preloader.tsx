import React from 'react';
import s from './preloader.module.css';

const Preloader = () => {
    return (
        <div className={s.preloader}>
            <div className={s.ring}/>
        </div>
    );
};

export default Preloader;