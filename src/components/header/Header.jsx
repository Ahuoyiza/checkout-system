import React from 'react';
import CartIcon from "../cart-icon/CartIcon"

import "./header.scss";

 const Header = ()  => {
    return (
        <div className="header">
            <div className="logo-container"></div>
            <img className="logo" src= {} alt="logo" />
            <div className="option">
                <CartIcon />
            </div>
        </div>
    )
}
export default Header