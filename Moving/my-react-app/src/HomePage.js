import React from 'react';
import Container from './Container'; // Import the Container component

const HomePage = () => {
  return (
    <div className="content">
      <Container height={300} content={[
        <h2 key="1">Container 1</h2>,
        <p key="2">This is some text inside the first container.</p>
      ]} />
      <Container height={400} content={[
        <h2 key="1">Container 2</h2>,
        <p key="2">This is some text inside the second container.</p>
      ]} />
      <Container height={250} content={[
        <h2 key="1">Container 3</h2>,
        <p key="2">This is some text inside the third container.</p>
      ]} />
    </div>
  );
};

export default HomePage;
