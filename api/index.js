const express = require('express');
const app = express();
const db = require('./db');

app.use(express.json({extended: false}));

app.get('/', function (req, res) {
  res.send('Hello World!')
});

// const users = require('./routes/users.js');
// app.use('/users', users);

module.exports = {
  path: '/api',
  handler: app
};