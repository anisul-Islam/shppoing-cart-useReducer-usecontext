import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="nav__link">
        Home
      </Link>
      <Link to="/cart" className="nav__link">
        Cart
      </Link>
    </nav>
  );
};

export default Navbar;
