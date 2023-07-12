const { Router } = require('express');
const router = Router();

router.post('/auth/join', function (req, res) {
});

// router.route('/foo')
//   .get(function (req, res) {
//   })
//   .post(function (req, res) {
//   });

const usersController = require('../controllers/usersController');
router.post('/login', usersController.login);

module.exports = router;