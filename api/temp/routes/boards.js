// const express = require('express');
// const router = express.Router();
// const Board = require('../temp/models/board');

// // 게시글 routes
// router.get('/', (res, req) => {
//     Board.find({}).sort('-createdAt')
//         .then(boards => {
//             res.render('/components/list/boardList', {data: boards, user: req.user})
//         })
//         .catch(err => {
//             return res.json({success: false, message: err});
//         })
// })

// // // new
// // router.get('/', (req, res) => {
// //     res.render('board/create');
// // })

// // // create
// // router.post('/', (req, res) => {
// //     Board.create(req.body.post)
// //         .then(board => {
// //             res.redirect('/'); // 글 작성 후에 메인리스트로 이동
// //         })
// //         .catch(err => {
// //             return res.json({success: false, message: err});
// //         })
// // })

// // // show 
// // router.get('/:id',(req, res) => {
// //     Board.findById(req.params.id)
// //         .then(board => {
// //             return res.render('board/view', {data: board})
// //         })
// //         .catch(err => {
// //             return res.json({success: false, message: err});
// //         })
// // })

// // // edit
// // router.get('/:id/edit', (req, res) => {
// //     Board.findById(req.params.id)
// //         .then(board => {
// //             res.redirect('/board/edit', {data: board})
// //         })
// //         .catch(err => {
// //             return res.json({success: false, message: err})
// //         })
// // })

// // // update
// // router.post('/:id', (req, res) => {
// //     req.body.board.updateAt = Date.now();
// //     Board.findByIdAndUpdate(req.params.id, req.body.post)
// //         .then(board => {
// //             res.redirect('/board/' + req.params.id)
// //         })
// //         .catch(err => {
// //             return res.json({success: false, message: err})
// //         })
// // })


// module.exports = router;