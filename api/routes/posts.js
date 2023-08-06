const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

let postSchema = new mongoose.Schema({
    title: {type:String, required:true},
    body: {type:String, required:true},
    createdAt: {type:Date, default:Date.now},
    updatedAt: Date
})

// let Post = mongoose.model('post', postSchema);

router.use(bodyParser.json());

// // index
router.get('/', function(req, res) {
    mongoose.model('post', postSchema).find({}).sort('-createdAt')
        .then(posts => {
            res.render('posts/index', {data: posts, user:req.user});        // render 위치 확인
        })
        .catch(err => {
            return res.json({success:false, message: err});
        })
})

// // 글쓰기 페이지 이동
router.get('/board/create', function(req, res){
    res.render('board/create');
})

// // 글 새로 작성하기
router.post('/board/create', function(req, res) {       // render 위치 확인
    Post.create(req.body.post)
        .then(post => {
            res.redirect('/boards');
        })
        .catch(err => {
            return res.json({success:false, message:err})
        })
})

// // show (개별페이지)
router.get('/board/view/:id', function(req, res) {      // render 위치 추가 + 개별페이지 작업
    Post.findById(req.params.id)
        .then(post => {
            return res.render('boards/show', {data: post});
        })
        .catch(err => {
            return res.json({success:false, message:err})
        })
})

// // edit
router.get('/board/:id/edit', function(req, res){       // render 위치 추가 + 페이지 작업 필요
    Post.findById(req.params.id)
        .then(post => {
            res.render('boards/edit', {data:post})
        })
        .catch(err => {
            return res.json({success:false, message:err});
        })
})

// update 
// router.post('/:id', function(req, res) {
//     req.body.post.updatedAt =  Date.now();
//     Post.findByIdAndUpdate(req.params.id, req.body.post)
//         .then(post => {
//             res.redirect('/boards')
//         })
//         .catch(err => {
//             return res.json({success:false, message:err})
//         })
// })

module.exports = router;