import React, { useEffect, useState } from 'react';
import './App.css';
import logo from './AgriViewLogo.png'; // Logo path
import userIcon from './user.png'; // User icon path
import TopBar from './TopBar'; // Import the TopBar component
import HomePage from './HomePage'; // Import the HomePage component
import Groups from './Groups'; // Import the Groups component

const App = () => {
  const [currentPage, setCurrentPage] = useState('HomePage'); // State for current page

  useEffect(() => {
    const timer = setTimeout(() => {
      // Handle any loading states or transitions here if needed
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'HomePage':
        return <HomePage />;
      case 'Groups': // Add case for Groups page
        return <Groups />;
      default:
        return <div>Page not found.</div>;
    }
  };

  return (
    <div className={`App`}>
      <TopBar logo={logo} userIcon={userIcon} />
      <div className="background-image" />
      {renderPage()}
    </div>
  );
};

export default App;
