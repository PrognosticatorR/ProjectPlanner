import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/signup">
            Signup &nbsp;
            <i className="fas fa-user-plus fa-1x " />
          </NavLink>
        </li>
        <li>
          <NavLink to="/signin">
            Login &nbsp;
            <i className=" fas fa-sign-in-alt fa-1x" />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SignedOutLinks;
