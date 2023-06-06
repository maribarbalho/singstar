import React, { useState } from 'react';
import './BarraPesquisa.css';
<<<<<<< Updated upstream
=======
import axios from 'axios';
import './App.css';
import Header from './components/Header.js';
class BarraPesquisa extends React.Component{
>>>>>>> Stashed changes

const BarraPesquisa = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

<<<<<<< Updated upstream
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
=======
  
  handleSubmit = async(event) => {
    event.preventDefault();
    try{
      const url = `https://api.musixmatch.com/ws/1.1/track.search?q=${this.state.pesquisa}&apikey=bd42c6400b7e16099ab400e78fbb08b0`
      const response = await fetch(url)
      const json = await response.json()


    }catch(err){
      alert(err)
    }

  }

  searchMusixmatch = async () => {
    axios.get(`https://api.musixmatch.com/ws/1.1/track.search?q=${this.state.pesquisa}&apikey=bd42c6400b7e16099ab400e78fbb08b0`)
    .then(res => {
        const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
        console.log('Status Code:', res.status);
        console.log('Date in Response header:', headerDate);
      
        const users = res.data;
      
      })
      .catch(err => {
        console.log('Error: ', err.message);
      })
    }

  
  render(){
    return (
    <div>
      <Header />
      <div className='barra-container'>
        <h1>O que você gostaria de cantar?</h1>
        <div className='barra-pesquisa'>          
          <form onSubmit={this.handleSubmit}>
            <input className={this.state.pesquisa !== "" ? "has-val input" : "input"}
              type="text"
              id="pesquisa"
              name="pesquisa"
              value={this.state.pesquisa}
              onChange={this.handleChange}
            />
            <button   type="submit" value="Submit">Buscar</button>
          </form>
        </div>
      </div>
    </div>
    );
  }
>>>>>>> Stashed changes
};

export default BarraPesquisa;