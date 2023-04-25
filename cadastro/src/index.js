import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import React from "react"
import ReactDOM from "react-dom"

import { Alert, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3002'
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
  handleSubmit = (event) => {

    alert('A form was submitted: ' + JSON.stringify(this.state));

    const db_request = api.post('/cadastro', JSON.stringify(this.state) ).then((response) => console.log(response))
    .catch((error) => console.log(error));

    console.log(db_request);
    event.preventDefault();
    
  }
  render(){
    return(
      <div className="container">
        <h1>Cadastro</h1>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="nome">Nome</Label>
            <Input type="text" id="nome" placeholder="Digite seu nome" name="nome" value={this.state.nome} onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="email">E-mail</Label>
            <Input type="text" id="email" placeholder="Digite seu e-mail" name="email" value={this.state.email} onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="senha">Senha</Label>
            <Input type="password" id="senha" placeholder="Digite sua senha" name="senha" value={this.state.senha} onChange={this.handleChange} />
          </FormGroup>
          <Button type="submit" value="Submit" color="primary">Cadastrar</Button>
        </Form>
        {this.state.mensagem && (
          <Alert color={this.state.mensagem.tipo}>
            {this.state.mensagem.texto}
          </Alert>
        )}
      </div>
    )
  }

}
ReactDOM.render(<App/>,document.querySelector("#root"))



