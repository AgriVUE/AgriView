import React from 'react';
import '../ComponentCss/PageChangeButton.css'; // Separate CSS for styling

const PageChangeButton = ({ text }) => {
  return (
    <button className="page-change-button">
      {text}
    </button>
  );
};

export default PageChangeButton;
