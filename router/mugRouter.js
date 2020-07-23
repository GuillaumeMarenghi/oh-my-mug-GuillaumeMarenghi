const express = require('express');

const mugController = require('../controllers/mugController');

const router = express.Router();

/**
 * affiche tous les mugs présent en bdd
 * 
 * @route GET /
 * @returns {json} 200 - resultat de la 'request'
 */
router.get('/', mugController.getAll);

/**
 * insère un nouveau mug
 * 
 * @route POST /mug
 * @returns {json} 200 - resultat de la 'request'
 */
router.post('/', mugController.create);

/**
 * utilise une des mugs
 * 
 * @route PUT /mug/use/:id
 * @returns {json} 200 - resultat de la 'request'
 */
router.put('/use/:id(\\d+)',mugController.use);

/**
 * nétoie un des mugs sales
 * 
 * @route PUT /mug/clean/:id
 * @returns {json} 200 - resultat de la 'request'
 */
router.put('/clean/:id(\\d+)',mugController.clean)

module.exports = router;