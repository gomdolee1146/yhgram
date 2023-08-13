
const express = require('express');
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.get('/', function (req, res) {
  res.send('Hello World!')
});

const boardSchema = mongoose.Schema({
    title: {type: String, required: true},
    body: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: Date
});
let Board = mongoose.model('board', boardSchema)

app.get('/boards', function(req, res) {   // index 페이지
  Board.find({}).sort('-createdAt')
    .then(boards => {
      res.json({success: true, data: boards})
      // res.render('/index', {data: boards, user: req.user})
    })
    .catch(err => {
      return res.json({success: false, message: err})
    })
});

app.get('/boards', function(req, res){
  res.render('/boards/create');
})

app.post('/boards', function(req, res) {    //create
  Board.create(req.body.board)
    .then(board => {
      res.redirect('/boards')
    })
    .catch(err => {
      return res.json({success: false, message: err})
    })
})

app.get('/boards/show/:id', function(req, res){
  Board.findById(req.params.id)
    .then(board => {
      // return res.render('boards/show', {data: board});
      res.json({success:true, data:board})
    })
    .catch(err => {
      return res.json({success: false, message: err})
    })
})

app.put('/boards/show/:id', function(req, res){
  req.body.board.updatedAt = Date.now();
  Board.findByIdAndUpdate(req.params.id, req.body.board)
    .then(board => {
      res.json({success: true, message: board._id+" updated"})
      // res.redirect('/boards/show/' + req.params.id);
    })
    .catch(err => {
      return res.json({success: false, message: err})
    })
})

app.delete('/boards/show/:id', function(req, res) {
  Board.findByIdAndRemove(req.params.id)
    .then(board => {
      // res.json({success:true, message: board._id + ' deleted'})
      res.redirect('/index');   // 글 삭제 후 전체게시글 리스트 페이지로 이동
    })
    .catch(err => {
      return res.json({success:false, message:err});
    })
})

module.exports = {
  path: '/api',
  handler: app
}; 