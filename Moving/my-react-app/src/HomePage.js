import React from 'react';
import Container from './Components/Container';
import PageChangeButton from './Components/PageChangeButton';

const HomePage = () => {
  return (
    <div className="content">
      <Container height={300} content={[
        <h2 key="1">Container 1</h2>,
        <PageChangeButton key="2" text="Go to Mapping Page" />
      ]} />
      {/* Add more containers/buttons here */}
    </div>
  );
};

export default HomePage;