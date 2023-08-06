
const express = require('express');
const app = express();
const db = require('./db');

app.get('/', function (req, res) {
  res.send('Hello World!')
});

let postsRouter = require('./routes/posts.js');
app.use('/posts', postsRouter);

module.exports = {
  path: '/api',
  handler: app
};