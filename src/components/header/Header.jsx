import React from 'react';
import CartIcon from "../cart-icon/CartIcon"
import CartDropdown from "../cart-dropdown/CartDropdwon"

import Logo from "../../assets/Logo.png";



import "./header.scss";

 const Header = ()  => {
    return (
        <div className="header">
            <div className="logo-container"></div>
            <img className="logo" src= {Logo} alt="logo" />
            <div className="option">
                <CartIcon />
            </div>
            <CartDropdown />
        </div>
    )
}
export default Header