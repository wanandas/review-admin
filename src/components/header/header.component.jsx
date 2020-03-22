import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/admin/admin.selection";
import { signOutStart } from "../../redux/admin/admin.action";
import { connect } from "react-redux";

const Header = ({ currentUser, signOutStart }) => {
  return (
    <div className="navbar">
      M.A Xsion
      <ul className="menu">
        <Link className="menu-item" to="/">
          home
        </Link>
        <Link className="menu-item" to="/create">
          crate
        </Link>
        {currentUser ? (
          <Link className="menu-item" to="/" onClick={signOutStart}>
            logout
          </Link>
        ) : (
          <Link className="menu-item" to="/login">
            login
          </Link>
        )}
      </ul>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
