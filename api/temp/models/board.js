// const express = require('express');
// const router = express.Router();
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const boardSchema = new Schema({
// // const boardSchema = mongoose.Schema
//     title:          {type: String, required: true},
//     contents:       {type: String, required: true},
//     uploader:       {type: Object, required: true},
//     createdAt:      {type: Date, default: Date.now},
//     updatedAt:      Date  // type 지정
// })

// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({extended: true}));

// const Boards = mongoose.model('Board', boardSchema);

// router.get('/', function(req, res){ // board/index.vue 페이지
//     console.log(req.body);

//     Boards.find({}).sort('-createdAt')
//         .then(boards => {
//             res.render('/', {data: boards, user:req.user});
//         })
//         .catch(err => {
//             return res.json({success:false, message: err})
//         })
// })
// router.post('/', function(req, res){
//     Boards.create(req.body.board, function(err, board){
//         if (err) return res.json({success:false, message:err});
//         res.json({success:true, data: board});
//     })
// })

// router.get('/create', function(req, res) {
//     res.render('board/create');    // 글작성페이지 작업
// })

// router.get('/view/:id', function(req, res){
//     Boards.findById(req.params.id, function(err, board){
//         if (err) return res.json({success:false, message:err});
//         res.json({success:true, data:board});
//     })
// })

// router.delete('/view/:id', function(req, res){
//     // Delete
// })

// router.put('/view/:id', function(req, res){
//     req.body.board.updatedAt = Date.now();
// })



// module.exports = Boards;