import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = () => {
  return (
    <div className="header">
      <div className="content-container">
        <div className="header-items">
          <NavLink className="header-title" to="/">
            YWK
          </NavLink>
          <div>
            <NavLink className="header-item" to="/help">
              Help
            </NavLink>
            <button onClick={startLogout()} className="header-button">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatchEvent(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);
