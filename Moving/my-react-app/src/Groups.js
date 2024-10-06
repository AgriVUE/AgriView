// Groups.js
import React from 'react';
import Container from './Container'; // Import the Container component

const Groups = () => {
  return (
    <div className="content">
      <Container height={300} content={[
        <h2 key="1">Group 1</h2>,
        <p key="2">This is some text inside the first group container.</p>
      ]} />
      <Container height={400} content={[
        <h2 key="1">Group 2</h2>,
        <p key="2">This is some text inside the second group container.</p>
      ]} />
      <Container height={250} content={[
        <h2 key="1">Group 3</h2>,
        <p key="2">This is some text inside the third group container.</p>
      ]} />
    </div>
  );
};

export default Groups;
