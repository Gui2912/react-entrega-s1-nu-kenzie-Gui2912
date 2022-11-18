import React from 'react';
import '../../Styles/globalStyles.css';
import '../../Styles/containers.css';
import '../../Styles/inputs.css';
import '../../Styles/form.css';
import { useState } from 'react';

const MainForm = (props) => {
  const {
    handleSubmit,
    description,
    setDescription,
    number,
    setNumber,
    selected,
    setSelected,
  } = props;

  return (
    <form
      onSubmit={handleSubmit}
      className="data-entrace flex column first-section"
    >
      <div className="flex column">
        <label htmlFor="description">Descrição</label>
        <input
          name="description"
          // value={product.description}
          type="text"
          placeholder="Digite aqui sua descrição"
          className="input-desc-main"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <span>Ex: compra de roupa</span>
        <div className="flex Jspace-between ">
          <label htmlFor="">
            <input
              type="number"
              placeholder="R$"
              name="number"
              onChange={(e) => setNumber(e.target.value)}
              value={number}
            />
          </label>
          <select
            name="select"
            onChange={(e) => setSelected(e.target.value)}
            value={selected}
          >
            <option value="entrace">Entrada</option>
            <option value="withdraw">Saída</option>
          </select>
        </div>
      </div>
      <button type="submit">Inserir valor</button>
    </form>
  );
};

export default MainForm;
