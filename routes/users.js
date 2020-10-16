var express = require('express');
var router = express.Router();

const controller = require("../controllers/usersController")

/* GET users listing. */
router.get('/', controller.index); // localhost:3000/api/users
router.get('/show', controller.show) // localhost:3000/api/users/show

module.exports = router;
