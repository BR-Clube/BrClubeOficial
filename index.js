const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/processar-formulario', (req, res) => {
  const dadosDoFormulario = req.body;
  console.log('Dados recebidos do formulário:', dadosDoFormulario);

  res.redirect('/'); // Redireciona de volta à página principal
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});