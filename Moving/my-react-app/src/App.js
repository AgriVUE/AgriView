import React, { useEffect, useState } from 'react';
import './App.css';
import logo from './Images/AgriViewLogo.png'; // Logo path
import userIcon from './Images/user.png'; // User icon path
import TopBar from './Components/TopBar'; // Updated path
import HomePage from './Pages/HomePage'; // Updated path
import MappingPage from './Pages/Mapping'; // Ensure this is the correct import for your Mapping page
import GroupsPage from './Pages/Groups'; // Ensure this is the correct import for your Groups page
import SupportPage from './Pages/Support'; // Ensure you have a Support component

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
        return <HomePage setCurrentPage={setCurrentPage} />; // Pass setCurrentPage to HomePage
      case 'Mapping':
        return <MappingPage setCurrentPage={setCurrentPage} />; // Pass setCurrentPage to MappingPage
      case 'Groups':
        return <GroupsPage setCurrentPage={setCurrentPage} />; // Pass setCurrentPage to GroupsPage
      case 'Support':
        return <SupportPage setCurrentPage={setCurrentPage} />; // Pass setCurrentPage to SupportPage
      default:
        return <div>Page not found.</div>;
    }
  };

  return (
    <div className={`App`}>
      <TopBar setCurrentPage={setCurrentPage} /> {/* Pass the function here */}
      <div className="background-image" />
      {renderPage()}
    </div>
  );
};

export default App;
