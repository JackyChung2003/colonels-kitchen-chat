import React from 'react';
import './MarioBrick.css'; // Import the CSS

export const MarioBrick: React.FC = () => {
  return (
    <div className="mario-brick">
      <div className="brick one"></div>
      <div className="tooltip-mario-container">
        <div className="box"></div>
        <div className="mush"></div>
      </div>
      <div className="brick two"></div>
    </div>
  );
};
