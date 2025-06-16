const { v4: uuidv4 } = require('uuid');
const store = require('../data/store');
const { validationResult } = require('express-validator');

exports.addItem = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const newItem = {
    id: uuidv4(),
    name: req.body.name,
    description: req.body.description
  };
  store.items.push(newItem);
  res.status(201).json(newItem);
};

exports.getAllItems = (req, res) => {
  res.json(store.items);
};

exports.getItemById = (req, res) => {
  const item = store.items.find(i => i.id === req.params.id);
  if (!item) return res.status(404).json({ error: 'Item not found' });
  res.json(item);
};

exports.deleteItem = (req, res) => {
  const index = store.items.findIndex(i => i.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Item not found' });

  const deleted = store.items.splice(index, 1);
  res.json({ message: 'Item deleted', item: deleted[0] });
};
