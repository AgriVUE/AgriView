import React from 'react';

const GroupsPage = ({ setCurrentPage }) => {
  return (
    <div>
      <h1>Groups Page</h1>
      <button onClick={() => setCurrentPage('HomePage')}>Back to Home</button>
    </div>
  );
};

export default GroupsPage;

