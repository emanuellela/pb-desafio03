import React from 'react';
import { IoSearch } from 'react-icons/io5';
import './BarraPesquisa.css';

interface BarraPesquisaProps {}

const BarraPesquisa: React.FC<BarraPesquisaProps> = () => {
  return (
    <div className="barra-pesquisa">
      <input type="text" placeholder="Enter item or restaurant you are looking for" />
      <button>
        <IoSearch /> {/* Render the search icon */}
      </button>
    </div>
  );
};

export default BarraPesquisa;
