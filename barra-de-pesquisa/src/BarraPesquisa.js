import React, { useState } from 'react';
import './BarraPesquisa.css';
import axios from 'axios';


const BarraPesquisa = ({ onSearch }) => {
  this.state.searchTerm = "";
  // this.state = {
  //   searchTerm: null
  // }

  const handleChange = (event) => {
    this.setState({[event.target.texto]: event.target.value});
  };

  const token = "9wVPPGqdUt6LoZeuVEvci5hrEzKQjdj4EQTTBW9-zjWi3GKp4bCW26aByLytH4MG"
  const handleSubmit = (event) => {
    console.log(this.state.searchTerm)
    const db_request = axios.post('http://api.genius.com/search?q=', 
    JSON.stringify(this.state.searchTerm),
    {
      headers: {
        'Authorization': `Bearer ${token}` 
      }
    } ).then((response) => console.log(response))
    .catch((error) => console.log(error));

    console.log(db_request);
    event.preventDefault();
    onSearch(this.state.searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className='barra-pesquisa input'
        type="text"
        id="texto"
        name="texto"
        value={this.state.searchTerm}
        onChange={handleChange}
        placeholder="Pesquisar..."
      />
      <button className='barra-pesquisa button' type="submit" value="Submit">Buscar</button>
    </form>
  );
};

export default BarraPesquisa;