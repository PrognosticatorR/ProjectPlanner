import React from "react";
import { Link } from "react-router-dom";
import SigndInLinks from "./SignedInLinks";
import SignOutLinks from "./SignedOutLinks";

const Navbar = () => {
  return (
    <nav className="nav-wrapper teal darken-2">
      <div className="container">
        <Link to="/" className="brand-logo">
          ProjectPlaner
        </Link>
        <SigndInLinks />
        <SignOutLinks />
      </div>
    </nav>
  );
};

export default Navbar;
