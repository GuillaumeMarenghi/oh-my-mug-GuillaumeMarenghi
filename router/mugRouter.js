const express = require('express');

const mugController = require('../controllers/mugController');

const router = express.Router();

router.get('/', mugController.getAll);
router.post('/', mugController.create);
router.put('/use/:id(\\d+)',mugController.use);

module.exports = router;