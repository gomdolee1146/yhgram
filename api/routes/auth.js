const mongoose = require('mongoose');
const { Router } = require('express');
const router = Router();
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    nickname:       {type: String, required: true},
    id:             {type: String, required: true, unique: true},
    password:       {type: String, required: true},
    createdDate:    {type: Date, default: Date.now}
})



router.post('/join', function (req, res) {
});


const usersController = require('../controllers/usersController');
router.post('/login', usersController.login);

module.exports = router;
module.exports = users = mongoose.model('user', UserSchema);