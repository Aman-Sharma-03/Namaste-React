import React from 'react'
import { useState } from 'react';

// Exporting by name - multiple exports can be performed
const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://www.48hourslogo.com/48hourslogo_data/2020/07/14/98820_1594658396.jpg"
    />
  </a>
);


const Header = () => {
  const [isLoggedInUser, setIsLoggedInUser] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
      
      {isLoggedInUser == true ? (
        <button className='log-btn' onClick={() => setIsLoggedInUser(false)}>Log out</button>
        ) : (
        <button className='log-btn' onClick={() => setIsLoggedInUser(true)}>Login</button>
      )}

      {
        // We can run only javascript expressions inside this not javascript statement
      }

    </div>
  );
};

export default Header; // exports the default component- only one thing

