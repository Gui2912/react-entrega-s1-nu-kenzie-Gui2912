import React from "react";

const ButtonRoute = ( { onClick, classes, text } ) => {

  return (
    <button onClick={ onClick } className={ classes }>
      { text }
    </button>
  );
};

export default ButtonRoute;
