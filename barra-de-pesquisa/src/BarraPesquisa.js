import React, { useState } from 'react';
import './BarraPesquisa.css';
import axios from 'axios';
import './App.css';
import Header from './components/Header.js';
import Data from "./assets/Data.json";


export default function BarraPesquisa(){
  const [tracks, setTracks] = useState([])

  
  const handleSubmit = async(event) => {
    event.preventDefault();
    try{
      
      const url = `https://api.musixmatch.com/ws/1.1/track.search?q=${tracks}&apikey=d27f868b079feacd18d705fcffee8a59`
      const response = await axios.get(url)
      const query = response.data.message.body.track_list
      // alert(JSON.stringify(query))
      setTracks(JSON.stringify(query));
      alert(JSON.stringify(query))

    }catch(err){
      alert(err)
    }
  }
  function GetList(){
    return(
      <div>  
        <ul>
        {
          Data.map((music) => (
            <li  className="box" key={music}>
            {music.track.track_id}
            {music}
            </li>
          ))
        }
      </ul>
      </div>
    )
  }

  
  
  return (
    <div>
      <Header />
      <div className='barra-container'>
        <h1>O que você gostaria de cantar?</h1>
        <div className='barra-pesquisa'>          
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="pesquisa"
              name="pesquisa"
              placeholder='kendrick lamar'
              onChange={event => setTracks(event.target.value)}
            />
            <button   type="submit" value="Submit">Buscar</button>
          </form>
        </div>
        <div>  
          <ul>
            {
              Data.message.body.track_list.map((music) => (
                <li  className="box" key={music.track_id}>
                <a>
                {music.track.track_name} -
                {music.track.artist_name}</a>
                </li>
              ))
            }
          </ul>
        </div>
        
        
      </div>
    </div>  
  );
}

