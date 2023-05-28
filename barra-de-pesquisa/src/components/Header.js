import React from 'react';
import './header.css';
import logo from './assets/logo.svg';

function Header (){
    return(
        <header>
          <div className='logo'>
            <img src= {logo} className="App-logo" alt="logo"></img>
          </div>  

          <div className='menu'>
            <ul>
                
            </ul>
          </div>

        </header>
    )
}

export default Header;