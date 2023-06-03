import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import React from "react"
import ReactDOM from "react-dom"
import { useNavigate, BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cadastro from './Cadastro';


import "./index.css";
// const [email, setEmail] = useState("");
// const [senha, setSenha] = useState("");




class App extends React.Component{


  render(){
    return(
      <Router>
        <Routes>
          <Route exact path='/' element={<Cadastro/>}/>
        </Routes>
      </Router>  
    )
  }

}
ReactDOM.render(<App/>,document.querySelector("#root"))



