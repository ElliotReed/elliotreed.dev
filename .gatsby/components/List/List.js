import React from 'react';
import './List.css';

export const List = ({ children }) => {
  return (
    <div className="list-container">
    <div className="list-container-header">
      {/* <h3>{this.props.title}</h3> */}
    </div>
    <ul>
    {children}
    </ul>
    </div>
  );
}