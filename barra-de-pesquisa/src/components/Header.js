import React from 'react';
import './header.css';
import logo from './assets/logo.svg';
import guest from './assets/guest.svg';

function Header (){
    return(
        <header>
          <div className='logo'>
            <img src= {logo} className="App-logo" alt="logo"></img>
          </div>  

          <div className='menu'>
          <img src= {guest} className="App-logo" alt="menu da conta"></img>
            <ul>
                
            </ul>
          </div>

        </header>
    )
}

export default Header;