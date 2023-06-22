import React, { useState } from 'react';
import './BarraPesquisa.css';
import axios from 'axios';
import './App.css';
import Header from './components/Header.js';

export default function BarraPesquisa() {
  const [searchTerm, setSearchTerm] = useState('');
  const [tracks, setTracks] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const url = `https://api.musixmatch.com/ws/1.1/track.search?q=${searchTerm}&apikey=d27f868b079feacd18d705fcffee8a59`;
      const response = await axios.get(url);
      const trackList = response.data.message.body.track_list;
      setTracks(trackList);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Header />
      <div className="barra-container">
        <h1>O que você gostaria de cantar?</h1>
        <div className="barra-pesquisa">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="pesquisa"
              name="pesquisa"
              placeholder="kendrick lamar"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <button type="submit">Buscar</button>
          </form>
        </div>
        <div>
          <ul>
            {tracks.map((track) => (
              <li className="box" key={track.track.track_id}>
                <a>
                  {track.track.track_name} - {track.track.artist_name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
