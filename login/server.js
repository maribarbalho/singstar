const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 4000;
const axios = require("axios");
usuarios = {};
contador = 0;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'giovanna',
    password: 'password',
    database: 'singstar'
});


connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ' + err.stack);
    return;
  }
  console.log('Conexão ao banco de dados realizada com sucesso.');
});


app.get('/usuarios', (req, res) => {
  connection.query('SELECT * FROM usuarios', (err,
    results, fields) => {
    res.json(results)
  })
  // res.send(usuarios);
})
app.put("/usuarios", async (req, res) => {
  contador++;
  const { texto } = req.body;
  usuarios[contador] = {
  contador, texto
  };
  await axios.post("http://localhost:10000/eventos", {
    tipo: "LembreteCriado",
    dados: {
      contador,
      texto,
    },
  });
  res.status(201).send(usuarios[contador]);
});

app.post("/eventos", (req, res) => {
  console.log(req.body);
  res.status(200).send({ msg: "ok" });
});


app.post('/login', (req, res) => {
  //  gambiarra pra transformar em json
  let json = Object.keys(req.body)[0];
  
  form = JSON.parse(json)
  
  console.log(form)
  
  const sql = `SELECT * FROM usuarios WHERE email = '${form.email}' AND senha = '${form.senha}' `;

  connection.query(sql, (error, results, fields) => {
    // console.log(results)
    // console.log(fields)
    res.send('ok')
    if (error) throw error;
    if (results.length > 0) {
      console.log("Login realizado")
    }else {
      // req.session.loggedin = true;
      // req.session.email = email;
      // alert('Login realizado ' + form.email);
      console.log("Erro, senha ou email errados")
      // res.redirect('/home');
    }
    // If there is an issue with the query, output the error
    //results tem as linhas
    //fields tem meta dados sobre os resultados, caso estejam disponível
    
    // if (error) throw error;
    // // If the account exists
    // if (results.length > 0) {
    //   // Authenticate the user
    //   request.session.loggedin = true;
    //   request.session.email = email;
    //   alert('Login realizado ' + form.email);
    //   console.log("Login realizado")
    //   // Redirect to home page
    //   // response.redirect('/home');
    // } else {
    //   response.send('Incorrect Email and/or Password!');
    // }			
    // response.end();
  });
});

app.listen(port, () => {
  console.log('Servidor Login rodando na porta ' + port);
});

