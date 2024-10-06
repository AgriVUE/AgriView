// App.js
import React, { useState } from 'react';
import './App.css';
import logo from './Images/AgriViewLogo.png';
import userIcon from './Images/user.png';
import TopBar from './Components/TopBar';
import HomePage from './HomePage';
import Mapping from './Mapping'; // Import the Mapping page

const App = () => {
  const [currentPage, setCurrentPage] = useState('HomePage');

  const renderPage = () => {
    switch (currentPage) {
      case 'HomePage':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'Mapping':
        return <Mapping />;
      case 'Groups':
        return <div>Groups Page</div>; // Add Groups page later
      // Add more cases for other pages here
      default:
        return <div>Page not found.</div>;
    }
  };

  return (
    <div className="App">
      <TopBar logo={logo} userIcon={userIcon} />
      <div className="background-image" />
      {renderPage()}
    </div>
  );
};

export default App;