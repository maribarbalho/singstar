import React, { useState } from 'react';
import './BarraPesquisa.css';
import axios from 'axios';
import './App.css';
import Header from './components/Header.js';
const fetch = require("node-fetch");
class BarraPesquisa extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      pesquisa: null
    }
  }
  	

  // this.state = {
  //   searchTerm: null
  // }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  
  handleSubmit = (event) => {
    this.searchMusixmatch();
    event.preventDefault();
  }

  searchMusixmatch = async () => {
    axios.get('https://api.musixmatch.com/ws/1.1/track.search?q=${this.state.pesquisa}&apikey=bd42c6400b7e16099ab400e78fbb08b0')
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
};

export default BarraPesquisa;