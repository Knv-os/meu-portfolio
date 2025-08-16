import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'contact-api', time: new Date().toISOString() });
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: 'Campos obrigatórios: name, email, message.' });
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const secure = process.env.SMTP_SECURE === 'true' || port === 465;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !user || !pass) {
      return res.status(500).json({ ok: false, error: 'SMTP não configurado. Defina SMTP_HOST, SMTP_USER, SMTP_PASS.' });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    const to = process.env.MAIL_TO || user;
    const fromAddress = process.env.MAIL_FROM || `"Portfolio Site" <${user}>`;

    await transporter.sendMail({
      from: fromAddress,
      to,
      replyTo: `${name} <${email}>`,
      subject: `Novo contato do portfólio - ${name}`,
      text: `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`,
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.5;color:#111">
          <h2>Novo contato do portfólio</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Mensagem:</strong></p>
          <p style="white-space:pre-line">${message}</p>
        </div>
      `,
    });

    return res.json({ ok: true, message: 'Mensagem enviada com sucesso.' });
  } catch (err) {
    console.error('Erro ao enviar e-mail:', err);
    return res.status(500).json({ ok: false, error: 'Falha ao enviar mensagem.' });
  }
});

app.listen(PORT, () => {
  console.log(`[contact-api] Rodando em http://localhost:${PORT}`);
});
