import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./Header.scss";
import { auth } from "../../firebase/firebase.utils";

import { connect } from 'react-redux';

//SST App props passed here by currentUser
const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

//Pull props  = value of currentUser
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

// Pass connect  2 funcs
export default connect(mapStateToProps)(Header);
