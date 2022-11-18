import React, { useState } from "react";
import ButtonRoute from "../ButtonRoute/ButtonRoute";
import "../../Styles/globalStyles.css";
import "../../Styles/texts.css";
import "../../Styles/containers.css";
import "../../Styles/buttons.css";

const HomeText = ({ verify, setVerify }) => {
  const buttonHandle = () => {
    console.log(verify);
    setVerify(false);
  };

  return (
    <section className="first-section flex column justify-center">
      <h1 className="title-2 white">
        <span className="nu">NU </span>Kenzie
      </h1>
      <h2 className="title-1 white">Centralize o controle das suas finanças</h2>
      <p className="white">de forma rápida e segura</p>
      <ButtonRoute
        onClick={buttonHandle}
        classes="button-color-brand1 button-home"
        text="Iniciar"
      />
    </section>
  );
};

export default HomeText;
