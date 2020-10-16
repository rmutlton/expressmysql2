var express = require('express');
var router = express.Router();

const controller = require("../controllers/homeController")

/* GET home page. */
router.get('/', controller.index); // localhost:3000/api/

module.exports = router;
