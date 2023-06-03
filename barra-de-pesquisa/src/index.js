import React from 'react';
import BarraPesquisa from './BarraPesquisa';
import './BarraPesquisa.css';
import './App.css';
import ReactDOM from "react-dom"
import { useNavigate, BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<BarraPesquisa/>}/>
      </Routes>
    </Router>  
  );
}

ReactDOM.render(<App/>,document.querySelector("#root"))
