import React from 'react';

const MappingPage = ({ setCurrentPage }) => {
  return (
    <div>
      <h1>Mapping Page</h1>
      <button onClick={() => setCurrentPage('HomePage')}>Back to Home</button>
    </div>
  );
};

export default MappingPage;
