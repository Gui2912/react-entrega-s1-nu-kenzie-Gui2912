import React from 'react';
import Trash from '../../assets/images/trash (1).svg';
import '../../Styles/globalStyles.css';
import '../../Styles/containers.css';

const Card = (props) => {
  const { description, number, selected } = props;



  return (
    <ul>
      <li>
        <div>
          <h2>{description}</h2>
          <div>
            <p>{number}</p>
            <button>
              <img src={Trash} alt="" />
            </button>
          </div>
        </div>
        <p>{selected}</p>
      </li>
    </ul>
  );
};

export default Card;
