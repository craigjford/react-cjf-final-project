import React from 'react'
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "80px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "green",
    textDecoration: "none",
    color: "white",
  };

  function NavBar() {
    return (
      <div className="navbar">
        <NavLink
          to="/"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkgreen",
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/courseform"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkgreen",
          }}
        >
          CourseForm
        </NavLink>
        <NavLink
          to="/courselist"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkgreen",
          }}
        >
          CourseList
        </NavLink>
      </div>
    )
  }
  
export default NavBar;
