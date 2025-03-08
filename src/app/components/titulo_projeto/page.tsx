import React from 'react';

const Title: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
  return (
    <h2
      className={`text-black text-2xl font-bold ml-20 relative ${className}`}
      style={{ display: 'inline-block' }}
    >
      {text}
      <span
        style={{
          content: "''",
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '2px',
          backgroundColor: '#4F4F4F', // Cor fourt
        }}
      />
    </h2>
  );
};

export default Title;
