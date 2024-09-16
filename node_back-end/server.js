const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'fernandobastosleite4@gmail.com',
    pass: 'teste123'
  }
});

app.post('/send-email', async (req, res) => {
  const { name, email, telefone, empresa, message, section } = req.body;

  let recipient;
  switch (section) {
    case 'Suporte':
      recipient = 'contato@unihospitalar.com.br';
      break;
    case 'Comercial':
      recipient = 'vendas@unihospitalar.com.br';
      break;
    case 'Licitação':
      recipient = 'licitacao@unihospitalar.com.br';
      break;
    case 'Financeiro':
      recipient = 'financeiro@unihospitalar.com.br';
      break;
    default:
      recipient = 'contato@unihospitalar.com.br';
  }

  const mailOptions = {
    from: email,
    to: recipient,
    subject: `Nova mensagem de ${name}`,
    text: `Nome: ${name}\nEmail: ${email}\nTelefone: ${telefone}\nEmpresa: ${empresa}\nMensagem: ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ success: true, message: 'E-mail enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    res.status(500).send({ success: false, message: 'Erro ao enviar e-mail' });
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
