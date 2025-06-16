const { body } = require('express-validator');

exports.validateItem = [
  body('name').notEmpty().withMessage('Name is required'),
  body('description').isLength({ min: 3 }).withMessage('Description must be at least 3 characters'),
];
