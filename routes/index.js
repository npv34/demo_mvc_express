const express = require('express');
const HomeController = require("../src/controllers/home.controller");
const router = express.Router();

/* GET home page. */
router.get('/', HomeController.showPageIndex);

module.exports = router;
