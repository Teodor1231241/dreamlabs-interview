const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');
const { validateItem } = require('../validators/itemValidator');

router.post('/', validateItem, itemsController.addItem);
router.get('/', itemsController.getAllItems);
router.get('/:id', itemsController.getItemById);
router.delete('/:id', itemsController.deleteItem);

module.exports = router;
