import React from "react";
import Container from "../../Components/Container/Container";
import ContainerBackGround from "../../Components/ContainerBackGround/ContainerBackGround";
import HomeImage from "../../Components/HomeImage/HomeImage";
import HomeText from "../../Components/HomeText/HomeText";
import '../../Styles/globalStyles.css'
import '../../Styles/containers.css'

const Home = ({ verify, setVerify }) => {
  return (
    <ContainerBackGround classes={'container-bg flex justify-center align-center gray-bg'}>
      <Container classes={'container-home flex justify-center Jspace-between'}>
        <HomeText verify={verify} setVerify={setVerify} />
        <HomeImage />
      </Container>
    </ContainerBackGround>
  );
};

export default Home;
