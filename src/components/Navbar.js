import React from "react";
import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <a href="/" className="logo-wrapper">
      <img
        className="logo"
        src="https://images.squarespace-cdn.com/content/v1/5ef15be0ddbf393489faa41b/1592957362496-TLELSLDWHHSV9RHHTS3O/Hungry-logo-PS-01.png"
      />
    </a>
  );
};

const Navbar = () => {
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
            <li className="item">Cart</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
