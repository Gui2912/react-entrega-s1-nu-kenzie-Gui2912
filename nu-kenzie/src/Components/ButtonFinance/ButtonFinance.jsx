import React from 'react';

const ButtonFinance = (props) => {
  const { classes, onClick, text } = props;

  return (
      <button className={classes} onClick={onClick}> {text} </button>
  );
};

export default ButtonFinance;
