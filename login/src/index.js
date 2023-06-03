import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import React from "react"
import ReactDOM from "react-dom"
import logoIMG from "./assets/logo.svg";
import { useNavigate, BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from './Login';


import "./index.css";
// const [email, setEmail] = useState("");
// const [senha, setSenha] = useState("");
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000'
})
function Initial(){
  return(
    <div>
      <h1>Tela inicial</h1>
      <p>Esta é a tela inicial do seu aplicativo.</p>
      <Link to="/tela-que-deseja-chamar">Chamar tela</Link>
    </div>
  )
}


class App extends React.Component{

  telaQueDesejaChamar(){
    return(
      <div>
        <h1>Tela q vai chanarl</h1>
        <p>Esta é a bunda inicial do seu aplicativo.</p>
        <Link to="/tela-que-deseja-chamar">Chamar tela</Link>
      </div>
    )
  }
  render(){
    return(
      <Router>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path="/tela-que-deseja-chamar" element={<telaQueDesejaChamar/>} />
        </Routes>
      </Router>  
    )
  }

}
ReactDOM.render(<App/>,document.querySelector("#root"))



