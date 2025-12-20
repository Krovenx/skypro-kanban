import React from 'react';
import './Column.scss';

const Column = ({ title, children }) => {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="card">
        {children}
      </div>
    </div>
  );
};

export default Column;