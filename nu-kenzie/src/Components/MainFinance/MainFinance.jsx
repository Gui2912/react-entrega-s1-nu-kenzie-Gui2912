import React from 'react';
import '../../Styles/globalStyles.css';
import '../../Styles/buttons.css';
import '../../Styles/inputs.css';
import '../../Styles/containers.css';
import '../../Styles/texts.css';
import ButtonFinance from '../ButtonFinance/ButtonFinance';
import { useState } from 'react';
import EmptyInputs from '../EmptyInputs/EmptyInputs';
import Card from '../Card/Card';

const MainFinance = (props) => {
  // const [releases, setReleases] = useState([]);
  const { product } = props;
  console.log(product);
  const buttonHandle = () => {
    console.log('Hello World');
  };

  return (
    <section className="main-finance-container">
      <div className="flex Jspace-between align-center finance-header">
        <h3>Resumo Financeiro</h3>
        <div className="flex flex-end button-finance-div">
          <ButtonFinance
            text={'Todos'}
            classes={'button-finance-main'}
            onClick={buttonHandle}
          />
          <ButtonFinance
            text={'Entradas'}
            classes={'button-finance-main'}
            onClick={buttonHandle}
          />
          <ButtonFinance
            text={'Despesas'}
            classes={'button-finance-main'}
            onClick={buttonHandle}
          />
        </div>
      </div>
      {product.length === 0 ? (
        <div className="flex column empty-images">
          <h2 className="main-finance-title">
            Você ainda não possui nenhum lançamento
          </h2>
          <EmptyInputs />
          <EmptyInputs />
          <EmptyInputs />
        </div>
      ) : (
        product.map((element, index) => {
          return (
            <ul>
              <Card
                key={index}
                description={element.description}
                selected={element.selected}
                number={element.number}
              />
            </ul>
          );
        })
      )}
    </section>
  );
};

export default MainFinance;
