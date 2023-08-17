import React from "react";
import littlelemon_logo from "../images/littlelemon_logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <img src={littlelemon_logo} alt="Little Lemon Logo"></img>
      <ul>
        <li>
          <Link to="/">
            <a aria-label="On Click">Home</a>
          </Link>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Menu</a>
        </li>
        <li>
          <Link to="/Booking">
            <a aria-label="On Click">Reservations</a>
          </Link>
        </li>
        <li>
          <a>Order Online</a>
        </li>
        <li>
          <a>Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
