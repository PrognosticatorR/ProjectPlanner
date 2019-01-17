import React from "react";
import { NavLink } from "react-router-dom";

const SigndInLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <NavLink to="/">Log Out</NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className="btn-floating btn-large waves-effect waves-light red"
        >
          Dev
        </NavLink>
      </li>
    </ul>
  );
};

export default SigndInLinks;
