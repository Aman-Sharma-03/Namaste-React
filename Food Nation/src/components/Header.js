import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Exporting by name - multiple exports can be performed
const Title = () => (
  <Link to="/">
    <img
      className="logo"
      alt="logo"
      src="https://www.48hourslogo.com/48hourslogo_data/2020/07/14/98820_1594658396.jpg"
    />
  </Link>
);

// There are Two types of routing-
// Client side Routing - Pages are loaded according to the routes defined on the client side coding
// Server Side Routing - Pages comes from the server side

// anchor tag reloads the whole page.


const Header = () => {
  const [isLoggedInUser, setIsLoggedInUser] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="contact">Contact Us</Link>
          </li>
          <li>
            <Link to="cart">Cart</Link>
          </li>
        </ul>
      </div>

      {isLoggedInUser == true ? (
        <button className="log-btn" onClick={() => setIsLoggedInUser(false)}>
          Log out
        </button>
      ) : (
        <button className="log-btn" onClick={() => setIsLoggedInUser(true)}>
          Login
        </button>
      )}

      {
        // We can run only javascript expressions inside this not javascript statement
      }
    </div>
  );
};

export default Header; // exports the default component- only one thing

