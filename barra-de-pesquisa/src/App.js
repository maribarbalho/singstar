import React from 'react';
import BarraPesquisa from './BarraPesquisa';
import './BarraPesquisa.css';
import './App.css';
import Header from './components/Header.js';

function App() {
  const handleSearch = (term) => {
    // Lógica para lidar com a pesquisa
    console.log('Termo de pesquisa:', term);
  };

  return (
      <div>
        <Header />
         <div className='barra-container'>
            <h1>O que você gostaria de cantar?</h1>
            <div className='barra-pesquisa'>
              <BarraPesquisa onSearch={handleSearch} />
            </div>
        </div>
     </div>
  );
}

export default App;