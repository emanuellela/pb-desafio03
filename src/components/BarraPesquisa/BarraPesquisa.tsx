import React from 'react';
import { IoSearch } from 'react-icons/io5';
import './BarraPesquisa.css';

interface BarraPesquisaProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const BarraPesquisa: React.FC<BarraPesquisaProps> = (props) => {
  return (
    <div className="barra-pesquisa">
      <input
        type="text"
        placeholder="Enter item or restaurant you are looking for"
        value={props.value}
        onChange={props.onChange}
      />
      <button>
        <IoSearch /> {/* Render the search icon */}
      </button>
    </div>
  );
};

export default BarraPesquisa;