import React from 'react';
import './NeonText.css';

interface NeonTextProps {
  text: string;
}

const NeonText: React.FC<NeonTextProps> = ({ text }) => {
  return (
    <div className="neon-container">
      <h1 className="neon-text">{text}</h1>
    </div>
  );
};

export default NeonText;
