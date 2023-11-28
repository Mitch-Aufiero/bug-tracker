const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/', usersController.getAllusers);
router.get('/:id', usersController.getuserById);


module.exports = router;
