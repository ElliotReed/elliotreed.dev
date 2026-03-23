import React from 'react';
import './List.css';

export const ListItem = props => {
  return (
<li>
    {props.children}
</li>
  );
}