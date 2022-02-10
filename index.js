require('dotenv').config();

const express = require('express');
const cors = require('cors');

const server = express();
const PORT = process.env.PORT || 9000;

server.use(express.json());
server.use(cors());

server.get('/api/users', (req, res) => {
  res.json({
    users: []
  });
});

server.post('/api/register', (req, res) => {
  res.json({
    username: req.body.username,
    password: req.body.password
  });
});

server.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    res.json({
      message: `Hello ${username}`
    });
  }
});

server.use('*', (req, res) => {
  res.send(`<h1>Hello, world!</h1>`);
});

server.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack
  });
});

server.listen(PORT, () => {
  console.log(`\n*** Server Running on http://localhost:${PORT} ***\n`)
});