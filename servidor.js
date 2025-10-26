const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/calcular', (req, res) => {
  const nome = req.body.nome;
  const nota1 = parseFloat(req.body.nota1);
  const nota2 = parseFloat(req.body.nota2);
  const media = (nota1 + nota2) / 2;

  let situacao = '';
  if (media >= 6) {
    situacao = 'Aprovado';
  } else if (media >= 2) {
    situacao = 'Exame Final';
  } else {
    situacao = 'Reprovado';
  }

  res.send(`
    <h1>Resultado</h1>
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>Nota 1:</strong> ${nota1}</p>
    <p><strong>Nota 2:</strong> ${nota2}</p>
    <p><strong>Média:</strong> ${media.toFixed(2)}</p>
    <p><strong>Situação:</strong> ${situacao}</p>
    <a href="/">Voltar</a>
  `);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});