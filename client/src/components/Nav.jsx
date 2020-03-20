import React from 'react';
import { Link } from '@reach/router';


const Nav = props => {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma" width="112" height="28" />
        </Link>
        <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/new" className="navbar-item">
            New
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <Link className="button is-info" to="/sign_in">Sign In</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;