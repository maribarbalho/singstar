import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./components/add-tutorial.component";
import Cadastro from "./components/tutorial.component";
import Login from "./components/tutorials-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/login"} className="navbar-brand">
            Login
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/cadastro"} className="nav-link">
                Cadastro
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<TutorialsList/>} />
            <Route path="/login" element={<TutorialsList/>} />
            <Route path="/cadastro" element={<AddTutorial/>} />
            <Route path="/home" element={<Tutorial/>} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
