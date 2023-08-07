
const express = require('express');
const app = express();
const db = require('./db');

app.get('/', function (req, res) {
  res.send('Hello World!')
});

module.exports = {
  path: '/api',
  handler: app
};