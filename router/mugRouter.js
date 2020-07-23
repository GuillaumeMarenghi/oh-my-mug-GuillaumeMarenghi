const express = require('express');

const mugController = require('../controllers/mugController');

const router = express.Router();

router.get('/', mugController.getAll);
router.post('/', mugController.create);
router.put('/use/:id(\\d+)',mugController.use);
router.put('/clean/:id(\\d+)',mugController.clean)

module.exports = router;