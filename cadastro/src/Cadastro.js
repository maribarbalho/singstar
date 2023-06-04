import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import React from "react"
import { Link } from "react-router-dom";
import logoIMG from "./assets/logo.svg";
import { Alert, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3002'
})
class Cadastro extends React.Component{
  

  constructor(props){
    super(props)
    this.state = {
        nome: null,
        email: null,
        senha: null,
        mensagem_de_erro: null
    }
  }
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }
  handleSubmit = async(event) => {
    event.preventDefault();
    // alert('A form was submitted: ' + JSON.stringify(this.state));
    try{

      const response = await api.post('/cadastro', JSON.stringify(this.state) )
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
              <span className="login-form-title"> Criar Conta </span>

              <span className="login-form-title">
                <img src={logoIMG} alt="Singstar" />
              </span>

              <div className="wrap-input">
                <input
                  className={this.state.nome !== "" ? "has-val input" : "input"}
                  type="email"
                  id="nome"
                  name="nome"
                  value={this.state.nome}
                  onChange={this.handleChange}
                />
                <span className="focus-input" data-placeholder="Nome"></span>
              </div>

              <div className="wrap-input">
                <input
                  className={this.state.email !== "" ? "has-val input" : "input"}
                  type="email"
                  id="email"
                  name="email"
                  value={this.state.email}
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
                <span className="focus-input" data-placeholder="Password"></span>
              </div>

              <div className="container-login-form-btn">
                <button className="login-form-btn" type="submit" value="Submit" onClick={this.handleSubmit}>Cadastrar</button>
              </div>

              <div className="text-center">
                <span className="txt1">Já possui conta? </span>
                <Link className="txt2" to="http://localhost:4001/">
                  Acessar com Email e Senha.
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      // <div className="container">
      //   <h1>Cadastro</h1>
      //   <Form onSubmit={this.handleSubmit}>
      //     <FormGroup>
      //       <Label for="nome">Nome</Label>
      //       <Input type="text" id="nome" placeholder="Digite seu nome" name="nome" value={this.state.nome} onChange={this.handleChange} />
      //     </FormGroup>
      //     <FormGroup>
      //       <Label for="email">E-mail</Label>
      //       <Input type="text" id="email" placeholder="Digite seu e-mail" name="email" value={this.state.email} onChange={this.handleChange} />
      //     </FormGroup>
      //     <FormGroup>
      //       <Label for="senha">Senha</Label>
      //       <Input type="password" id="senha" placeholder="Digite sua senha" name="senha" value={this.state.senha} onChange={this.handleChange} />
      //     </FormGroup>
      //     <Button type="submit" value="Submit" color="primary">Cadastrar</Button>
      //   </Form>
      //   {this.state.mensagem && (
      //     <Alert color={this.state.mensagem.tipo}>
      //       {this.state.mensagem.texto}
      //     </Alert>
      //   )}
      // </div>
    )
  }

}
export default Cadastro;



