import React, { useState } from 'react';
import ButtonRoute from '../../Components/ButtonRoute/ButtonRoute';
import Container from '../../Components/Container/Container';
import ContainerBackGround from '../../Components/ContainerBackGround/ContainerBackGround';
import MainForm from '../../Components/MainForm/MainForm';
import MainHeader from '../../Components/MainHeader/MainHeader';
import '../../Styles/globalStyles.css';
import '../../Styles/buttons.css';
import '../../Styles/containers.css';
import MainFinance from '../../Components/MainFinance/MainFinance';

const Main = ({ verify, setVerify }) => {
  const [product, setProduct] = useState([]);

  const [description, setDescription] = useState('')
  const [number, setNumber] = useState(0)
  const [selected, setSelected] = useState('entrace')


  const handleButton = () => {
    console.log(verify);
    setVerify(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = [
      ...product,
      {
        description: description,
        selected: selected,
        number: number,
      },
    ];
    setProduct(newProduct)
  };

  return (
    <ContainerBackGround classes={'container-bg flex justify-center white-bg'}>
      <MainHeader>
        <ButtonRoute
          text="Início"
          onClick={handleButton}
          classes={'button-main'}
        />
      </MainHeader>
      <Container
        classes={'margin-top-main-container container-home flex Jspace-between'}
      >
        <MainForm
          description={description}
          setDescription={setDescription}
          number={number}
          setNumber={setNumber}
          selected={selected}
          setSelected={setSelected}
          handleSubmit={handleSubmit}
        />
        <MainFinance product={product} />
      </Container>
    </ContainerBackGround>
  );
};

export default Main;
