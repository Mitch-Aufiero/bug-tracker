const express = require('express');
const router = express.Router();
const bugsController = require('../controllers/bugsController');

router.get('/', bugsController.getAllBugs);
router.get('/:id', bugsController.getBugById);
router.post('/', bugsController.createBug);


module.exports = router;
