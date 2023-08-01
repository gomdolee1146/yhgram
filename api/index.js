var express = require('express');
var path = require('path');
var app = express();
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
  console.log('MongoDB Connected...');
});

var dataSchema = new mongoose.Schema({
  name: String,
  count: Number 
})

var Data = mongoose.model('data', dataSchema);
Data.findOne({name: 'myData'}, (err, data) => {
  if (err) return console.log('에러: ', err);
  if (!data) {
    Data.create({name: 'myData', count: 0}, (err, data) => {
      if (err) return console.log('data error: ', err);
      console.log('Counter initialized: ', data);
    })
  }
})
