import React from 'react';

export const Button = () => {
  return (
    <div className='btn-container'>
      <button className='btn active'>
        <i className='far fa-eye'></i> Timeline
      </button>
      <button className='btn'>
        <i className='fas fa-user'></i> About
      </button>
    </div>
  );
};
