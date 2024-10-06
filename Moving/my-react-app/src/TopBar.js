// TopBar.js
import React from 'react';
import './TopBar.css'; // Assuming there's a CSS file for styles
import logo from './AgriViewLogo.png'; // Update with the logo path
import userIcon from './user.png'; // User icon path

const TopBar = () => {
  return (
    <div className="top-bar">
      <img src={logo} alt="AgriView Logo" className="logo" />
      <img src={userIcon} alt="User Icon" className="user-icon" />
    </div>
  );
};

export default TopBar;