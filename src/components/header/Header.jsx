import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./Header.scss";

const Header = () => (
  <div class="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div class="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
    </div>
  </div>
);
export default Header;
