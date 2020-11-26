import React from 'react';
import {connect} from "react-redux";

import {toggleCartHidden } from "../../redux/cart.actions"; 

import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.scss';

 const CartIcon = ({toggleCartHidden}) => {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count"> 0</span>
        </div>
    )
};

//NEED TO FIX BUG HERE.... ERROR CONECTING TO STORE>> NO PROVIDER  ----TIME TO SUBMIT WILL FIX BUG IF GIVEN AN EXTENSION
//const mapDispatchToProps = dispatch => ({
 //   toggleCartHidden: () => dispatch(toggleCartHidden())
//});
export default //connect(
    //null,
    //mapDispatchToProps
//) 
CartIcon;
