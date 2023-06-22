import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import React from "react"

import logoIMG from "./assets/logo.svg";


import "./index.css";
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4002'
})

class Login extends React.Component{

  constructor(props){
    super(props)
    this.state = {
        email: null,
        senha: null,
        mensagem_de_erro: null
    }
  }
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }
  
  handleSubmit = async (event) => {
    event.preventDefault();

    try{
      const response = await axios.post('http://localhost:4002/login', JSON.stringify(this.state))
      alert(response.data)
      
    }catch(err){
      alert(err.response.data)
    }
   
    
  }

  render(){
    return(

      <div className="container">
        <div className="container-login">
          <div className="wrap-login">
            <form className="login-form" onSubmit={this.handleSubmit}>
              <span className="login-form-title"> Bem vindo! </span>

              <span className="login-form-title">
                <img src={logoIMG} alt="Singstar" />
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
                <button className="login-form-btn" type="submit" value="Submit">
                <a href="http://localhost:3000/">Login.</a></button>
              </div>

              <div className="text-center">
                <span className="txt1">Não possui conta? </span>
                <a href="http://localhost:3001/">Cadastre aqui.</a>
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

export default Login;


