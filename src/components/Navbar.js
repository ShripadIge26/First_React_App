import React from "react";
import { Link } from "react-router-dom"
import {useSelector} from "react-redux"
import logo from '../images/foodie-logo.svg'


const Logo = () => {
  return (
    <Link to="/" className="logo-wrapper">
      <img
        className="logo"
        src={logo}
      />
    </Link>
  );
};

const Navbar = () => {

const cartItems = useSelector((store) => store.cart.items)

  return (
    <div className="nav-wrapper">
      <div className="nav-items-wrapper">
        <Logo />
        <ul className="nav-items">
          <Link to="/help">
            <li className="item">Help</li>
          </Link>
          <Link to="/contact">
            <li className="item">Contact</li>
          </Link>
          <Link to="/cart">
            <li className="item">Cart({cartItems.length})</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
