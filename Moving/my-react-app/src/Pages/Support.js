import React from 'react';

const SupportPage = ({ setCurrentPage }) => {
  return (
    <div>
      <h1>Support Page</h1>
      <button onClick={() => setCurrentPage('HomePage')}>Back to Home</button>
    </div>
  );
};

export default SupportPage;
