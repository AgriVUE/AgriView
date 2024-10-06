// TopBar.js
import logo from '../Images/AgriViewLogo.png'; // Update with the logo path
import userIcon from '../Images/user.png'; // User icon path
import React from 'react';
import '../ComponentCss/TopBar.css'; // Assuming there's a CSS file for styles

const TopBar = ({ setCurrentPage, userIcon }) => {
  return (
    <div className="top-bar">
      <button 
        className="logo-button" 
        onClick={() => setCurrentPage('HomePage')} // Set state to HomePage when clicked
      >
        <img src={logo} alt="AgriView Logo" className="logo" />
      </button>
      <img src={userIcon} alt="User Icon" className="user-icon" />
    </div>
  );
};

export default TopBar;
