import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import React from "react"
import ReactDOM from "react-dom"
import logoIMG from "./assets/logo.svg";
import { useNavigate } from "react-router-dom"

import "./index.css";
// const [email, setEmail] = useState("");
// const [senha, setSenha] = useState("");
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000'
})

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
        nome: null,
        email: null,
        senha: null,
        mensagem_de_erro: null
    }
  }
  state = {
    nome: null,
    email: null,
    senha: null,
    mensagem_de_erro: null
  }
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
    this.setState({[event.target.email]: event.target.value});
    this.setState({[event.target.senha]: event.target.value});
  }
  

  onClickHandler = () => {
    const navigate = useNavigate()
    navigate(`../../cadastro/src/index.js`)
  }
  handleSubmit = (event) => {

    alert('A form was submitted: ' + JSON.stringify(this.state));

    const db_request = api.post('/login', JSON.stringify(this.state) ).then((response) => console.log(response))
    .catch((error) => console.log(error));

    console.log(db_request);
    event.preventDefault();
    
  }
  render(){
    return(
      <div className="container">
        <div className="container-login">
          <div className="wrap-login">
            <form className="login-form" onSubmit={this.handleSubmit}>
              <span className="login-form-title"> Bem vindo! </span>

              <span className="login-form-title">
                <img src={logoIMG} alt="Jovem Programador" />
              </span>

              <div className="wrap-input">
                <input
                  className={this.state.email !== "" ? "has-val input" : "input"}
                  type="text"
                  value={this.state.email}
                  id="email" 
                  name="email"
                  onChange={this.handleChange}
                  
                />
                <span className="focus-input" data-placeholder="Email"></span>
              </div>

              <div className="wrap-input">
                <input
                  className={this.state.senha !== "" ? "has-val input" : "input"}
                  type="password"
                  value={this.state.senha}
                  id="senha" 
                  name="senha"
                  onChange={this.handleChange}
                />
                <span className="focus-input" data-placeholder="Senha"></span>
              </div>

              <div className="container-login-form-btn">
                <button className="login-form-btn" type="submit" value="Submit">Login</button>
              </div>

              <div className="text-center">
                <span className="txt1">Não possui conta? </span>
                <a href="localhost:3001">Criar conta</a>
                {/* <div>
                  <Link to="/insert/your/path/here" className="btn btn-primary">
                    Criar conta
                  </Link>
                </div> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

}
ReactDOM.render(<App/>,document.querySelector("#root"))



