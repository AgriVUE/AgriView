import React from 'react';
import './Container.css'; // Create a separate CSS file for Container styles if needed

const Container = ({ height, content }) => {
  return (
    <div className="container" style={{ height: `${height}px`, opacity: 1 }}>
      {content.map((item, index) => (
        <div key={index}>{item}</div> // Render each item in the content array
      ))}
    </div>
  );
};

export default Container;