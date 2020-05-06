import React from 'react';
import Style from './Style.module.css';
import Logo from '../../../assets/Images/logo.png';

const Header = () => (
    <div className={Style.header}>
        <img className={Style.logo} src={Logo} alt="Logo" />
    </div>
)

export default Header;
