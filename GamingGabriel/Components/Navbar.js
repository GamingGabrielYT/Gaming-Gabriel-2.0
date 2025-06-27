import "bootstrap/dist/css/bootstrap.css";
import "./Styles.css";
import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min";
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" id="Header">
            <img src="https://www.creativefabrica.com/wp-content/uploads/2023/05/08/Video-Game-Controller-Logo-Graphics-69127373-1.png" alt="Logo" width="60" height="40" class="d-inline-block align-text-top"></img>
            Gaming Gabriel Website
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div class="divClass">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <NavLink to="/">
                  <li className="nav-item" id="a">
                    <a className="nav-link active" id="aTag" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                </NavLink>
                <NavLink to="/about">
                  <li className="nav-item" id="a">
                    <a className="nav-link" href="#">
                      About
                    </a>
                  </li>
                </NavLink>
                <NavLink to="/popular">
                  <li className="nav-item" id="a">
                    <a className="nav-link" href="#">
                      Popular Videos
                    </a>
                  </li>
                </NavLink>
                <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="aTag">
            Games
          </a>
          <ul className="dropdown-menu">
            <NavLink to="/rdr">
            <li><a className="dropdown-item" href="#">Red Dead Redemption</a></li>
            </NavLink>
            <NavLink to="/rdr2">
            <li><a className="dropdown-item" href="#">Red Dead Redemption 2</a></li>
            </NavLink>
            <NavLink to="/gta">
            <li><a className="dropdown-item" href="#">Grand Theft Auto V</a></li>
            </NavLink>
          </ul>
        </li>
                <NavLink to="/products">
                  <li className="nav-item" id="a">
                    <a className="nav-link" href="#">
                      Products
                    </a>
                  </li>
                </NavLink>
                <NavLink to="/support">
                  <li className="nav-item" id="a">
                    <a className="nav-link" href="#">
                      Support
                    </a>
                  </li>
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;