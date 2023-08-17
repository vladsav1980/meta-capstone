import React from "react";
import small_logo from "../images/small_logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <section>
        <div>
          <img src={small_logo} />
        </div>
        <div>
          <h3>Document Navigation</h3>
          <ul>
            <li>
              <Link to="/">
                <a aria-label="On Click">Home</a>
              </Link>
            </li>
            <li>About</li>
            <li>Menu</li>
            <li>
              <Link to="/Booking">
                <a aria-label="On Click">Reservations</a>
              </Link>
            </li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>
        <div>
          <h3>Social Media Links</h3>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
