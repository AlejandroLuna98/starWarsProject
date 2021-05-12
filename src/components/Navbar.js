import React from "react";
import { Link, NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className=" navbar navbar-expand-sm navbar-dark bgcolor d-sm-flex justify-content-center  ">
      <Link className="navbar-brand mx-3" to="/Home">
        Wiki Star Wars
      </Link>
      <div className="navbar-collapse mx-3 text-center">
        <div className="navbar-nav">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/people"
          >
            People
          </NavLink>
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/planets"
          >
            Planets
          </NavLink>
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/starShips"
          >
            StartShips
          </NavLink>
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/vehicles"
          >
            Vehicles
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
