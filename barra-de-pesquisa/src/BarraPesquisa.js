import React, { useState } from 'react';
import './BarraPesquisa.css';

const BarraPesquisa = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className='barra-pesquisa input'
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Pesquisar..."
      />
      <button className='barra-pesquisa button' type="submit">Buscar</button>
    </form>
  );
};

export default BarraPesquisa;