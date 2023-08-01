// const express = require('express');
// const app = express();
// const db = require('./temp/db');
// const bodyParser = require('body-parser')

// const bcrypt = require('bcrypt');
// const saltRound = 10;

// app.use(express.json({extended: false}));
// app.use(bodyParser.json());

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// });

// const users = require('./routes/users.js');
// app.use('/users', users);    

// const boards = require('./routes/boards.js');
// app.use('/board', boards);

// // 회원가입
// app.post('/auth/join', (req, res) => {
//   const {id, nickname, password} = req.body;    // models/user.js
//   try {

//     // 중복 아이디 확인
//     let user = User.findOne({id}); 
//     if (user) {
//       return res.json({errors: [{msg:'중복된 아이디입니다.'}]})
//     }
    
//     user = new User({id, nickname, password});

//     user.password = bcrypt.hashSync(password, saltRound);
//     user.save();

//     res.send('완료', {data});
//     // res.push('/index');

//   } catch (error) {
//     console.log(error.message);
//     res.status(500).send('에러')
//   }
// })

// // 로그인
// app.post('/auth/login', (req, res) => {
//   User.findOne({id: req.body.id, password: req.body.password}, (err, user) => {
//     if (err) return res.status(500).json({message: '에러'})
//     else if (user) return res.status(200).json({message:'완료', data:user}) 
//   })
// })

// module.exports = {
//   path: '/api',
//   handler: app
// };