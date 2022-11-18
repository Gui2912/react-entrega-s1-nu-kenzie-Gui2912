import React from 'react';
import Trash from '../../assets/images/trash (1).svg';
import '../../Styles/globalStyles.css';
import '../../Styles/containers.css';
import '../../Styles/buttons.css';
import '../../Styles/card.css';
import '../../Styles/texts.css';


const Card = (props) => {
  const { description, number, selected } = props;

  return (
    <li className="card-container">
      <span className='distinct distinct-positive'>
      </span>
      <div className="flex Jspace-between align-center">
        <h2>{description}</h2>
        <div className="flex number-trash Jspace-between align-center">
          <p>R$ {number}</p>
          <button className="trash flex align-center justify-center">
            <img src={Trash} alt="" />
          </button>
        </div>
      </div>
        <p className='selected-text'>{selected}</p>
    </li>
  );
};

export default Card;
