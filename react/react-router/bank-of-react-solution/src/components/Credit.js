import React from 'react';

const Credit = (props) => {
  return (
      <div>
        <span>Description: {props.description}</span>
        <span> | </span>
        <span>Amount: {props.amount}</span>
        <span> | </span>
        <span>Date: {props.date}</span>
      </div>
  );
};

export default Credit;