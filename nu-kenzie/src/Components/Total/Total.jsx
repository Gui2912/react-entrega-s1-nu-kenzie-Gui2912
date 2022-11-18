import React from 'react';
import '../../Styles/globalStyles.css';
import '../../Styles/texts.css';
import '../../Styles/containers.css';

const Total = (props) => {
  const { totalValue } = props;

  return (
    <div>
      <div>
        <h2>Valor Total: </h2>
        <p>$ {totalValue}</p>
      </div>
      <p>O Valor se refere ao saldo</p>
    </div>
  );
};

export default Total;
