const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3002;
const usuarios = {};
const observacoesPorLembreteId = {}
const axios = require ('axios');
const { v4: uuidv4 } = require('uuid');

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

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/lembretes/:id/observacoes', (req, res) => {
  res.send(observacoesPorLembreteId[req.params.id] || []);
})
app.put('/lembretes/:id/observacoes', async (req, res) => {
  const idObs = uuidv4();
  const { texto } = req.body;
  //req.params dá acesso à lista de parâmetros da URL
  const observacoesDoLembrete =
  observacoesPorLembreteId[req.params.id] || [];
  observacoesDoLembrete.push({ id: idObs, texto });
  observacoesPorLembreteId[req.params.id] =
  observacoesDoLembrete;
  await axios.post('http://localhost:10000/eventos', {
    tipo: "ObservacaoCriada",
    dados: {
    id: idObs, texto, lembreteId: req.params.id
    }
  })
  res.status(201).send(observacoesDoLembrete);
});

//adicionar a ambos microsservicos de lembretes e observações

app.post("/eventos", (req, res) => {
 console.log(req.body);
 res.status(200).send({ msg: "ok" });
});
app.get('/usuarios', (req, res) => {
  res.send(usuarios);
});

//add new user
// app.post('/cadastro',(req, res) => {
//   let data = {nome: req.body.nome, email: req.body.email, senha: req.body.senha};
//   let sql = "INSERT INTO usuarios SET ?";
//   connection.query(sql, data,(err, result) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send('Erro ao cadastrar usuário.');
//     } else {
//       console.log('Usuário cadastrado com sucesso.');
//       res.send('Cadastro realizado com sucesso.');
//     }
//   });
// });

app.post('/cadastro', (req, res) => {
  
  //  gambiarra pra transformar em json
  let json = Object.keys(req.body)[0];
  
  form = JSON.parse(json)
  
  console.log(form)
  
  const sql = `INSERT INTO usuarios (nome, email, senha) VALUES ('${form.nome}', '${form.email}', '${form.senha}')`;

  connection.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erro ao cadastrar usuário.');
    } else {
      console.log('Usuário cadastrado com sucesso.');
      res.send('Cadastro realizado com sucesso.');
    }
  });
});

app.listen(port, () => {
  console.log('Servidor Login rodando na porta ' + port);
});

