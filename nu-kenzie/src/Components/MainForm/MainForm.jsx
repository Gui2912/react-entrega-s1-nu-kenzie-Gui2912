import React from 'react';
import '../../Styles/globalStyles.css';
import '../../Styles/containers.css';
import '../../Styles/inputs.css';
import '../../Styles/texts.css';
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
      <div className="flex column form-content">
        <label htmlFor="description">Descrição</label>
        <input
          name="description"
          type="text"
          placeholder="Digite aqui sua descrição"
          className="input-desc-main"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <span className='span'>Ex: compra de roupa</span>
        <div className="flex Jspace-between input-container">
          <label htmlFor="">
            <input
              type="number"
              placeholder="R$"
              name="number"
              onChange={(e) => setNumber(e.target.value)}
              value={number}
              className='input-entrace-data'
            />
          </label>
          <select
            name="select"
            onChange={(e) => setSelected(e.target.value)}
            value={selected}
            className='select-type'
          >
            <option value="entrace">Entrada</option>
            <option value="withdraw">Saída</option>
          </select>
        </div>
      </div>
      <button type="submit" className='button-color-brand1 height-btn'>Inserir valor</button>
    </form>
  );
};

export default MainForm;
