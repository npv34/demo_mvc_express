const express = require('express');
const UserController = require("../src/controllers/admin/user.controller");
const router = express.Router();

/* GET users listing. */
router.get('/', UserController.showUserList);
router.get('/create', UserController.showFormCreate);
router.post('/add', UserController.store);


module.exports = router;
