import React from "react";
import '../../Styles/globalStyles.css';
import '../../Styles/texts.css';
import '../../Styles/containers.css';


const MainHeader = ({ children }) => {
  return (
      <header className="main-header flex justify-center">
        <div className="container-header flex Jspace-between align-center">
        <h1>
          <span className="nu">Nu </span>Kenzie
        </h1>
        {children}
        </div>
      </header>
  );
};

export default MainHeader;
