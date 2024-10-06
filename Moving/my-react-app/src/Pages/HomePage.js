import React from 'react';
import Container from '../Components/Container'; // Correct import path
import PageChangeButton from '../Components/PageChangeButton'; // Correct import path

const HomePage = ({ setCurrentPage }) => {
  return (
    <div className="content">
      <Container height={300} content={[
        <h2 key="1">Navigation</h2>,
        <PageChangeButton 
          text="Go to Mapping Page" 
          onClick={() => setCurrentPage('Mapping')}
          key="mapping" // Add a unique key
        />,
        <PageChangeButton 
          text="Go to Groups Page" 
          onClick={() => setCurrentPage('Groups')}
          key="groups" // Add a unique key
        />,
        <PageChangeButton 
          text="Support" 
          onClick={() => setCurrentPage('Support')}
          key="support" // Add a unique key
        />
      ]} />
      
      <Container height={400} content={[
        <h2 key="2">Container 2</h2>,
        <p key="3">This is some text inside the second container.</p>
      ]} />
      
      <Container height={250} content={[
        <h2 key="3">Container 3</h2>,
        <p key="4">This is some text inside the third container.</p>
      ]} />
    </div>
  );
};

export default HomePage;
