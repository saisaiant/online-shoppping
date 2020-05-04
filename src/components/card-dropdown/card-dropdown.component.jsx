import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import "./card-dropdown.styles.scss";

const CartDropDown = () => (
  <div className="cart-dropdown">
    <div className="cart-item"></div>
    <CustomButton>GO TO CHECK OUT</CustomButton>
  </div>
);
export default CartDropDown;
