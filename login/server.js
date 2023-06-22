const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(cors());
const port = 4002;
const axios = require("axios");
usuarios = {};
contador = 0;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '*',
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

    if (error) throw error;
    if (results.length > 0) {
      console.log("Login realizado")
      res.status(200).send("Login realizado");
    }else {
      console.log("Erro: senha ou email errados")
      res.status(403).send("Erro: senha ou email errados");
    }
 
  });
});

app.listen(port, () => {
  console.log('Servidor Login rodando na porta ' + port);
});

