import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <li>
              <div className="brand-logo center customNav">
                New York Times Search!
              </div>
            </li>
            <li>
              <a
                onClick={() => window.location.replace("/")}
                style={{ "text-decoration": "none" }}
              >
                Home
              </a>
            </li>
            <li>
              <NavLink to="/saved" style={{ "text-decoration": "none" }}>
                Saved
              </NavLink>
            </li>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
