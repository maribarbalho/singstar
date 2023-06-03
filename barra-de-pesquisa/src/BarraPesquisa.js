import React, { useState } from 'react';
import './BarraPesquisa.css';
import axios from 'axios';
import './App.css';
import Header from './components/Header.js';
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
    
    alert('A form was submitted: ' + JSON.stringify(this.state.pesquisa));

    const token = "9wVPPGqdUt6LoZeuVEvci5hrEzKQjdj4EQTTBW9-zjWi3GKp4bCW26aByLytH4MG"

    console.log(token)

    // const db_request = axios.post('http://api.genius.com/search?q=', 
    // JSON.stringify(this.state.pesquisa),
    // {
    //   headers: {
    //     'Authorization': `Bearer ${token}` 
    //   }
    // } ).then((response) => console.log(response))
    // .catch((error) => console.log(error));

    // console.log(db_request);
    event.preventDefault();
    // onSearch(this.state.searchTerm);
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