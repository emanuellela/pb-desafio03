import React, { useState, ChangeEvent } from 'react';
import { IoSearch } from 'react-icons/io5';
import './BarraPesquisa.css';

interface BarraPesquisaProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

const BarraPesquisa: React.FC<BarraPesquisaProps> = (props) => {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Evitar que o formulário seja submetido
      props.onSearch();
    }
  };

  return (
    <form className="barra-pesquisa"> {/* Envolver o input em um formulário */}
      <input
        type="text"
        placeholder="Enter item or restaurant you are looking for"
        value={props.value}
        onChange={props.onChange}
        onKeyPress={handleKeyPress}
      />
      <button type="button" onClick={props.onSearch}> {/* Usar type="button" para evitar submissão do formulário */}
        <IoSearch />
      </button>
    </form>
  );
};

export default BarraPesquisa;
