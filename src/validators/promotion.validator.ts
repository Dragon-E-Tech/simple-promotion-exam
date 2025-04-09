import { body, param } from 'express-validator';

export const createPromotionValidation = [
  body('title')
    .trim()
    .notEmpty()
    .withMessage('Title is required')
    .isLength({ min: 3, max: 100 })
    .withMessage('Title must be between 3 and 100 characters'),
  
  body('description')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('Description must not exceed 500 characters'),
  
  body('location')
    .trim()
    .notEmpty()
    .withMessage('Location is required')
    .isIn(['mall', 'retail', 'restaurant'])
    .withMessage('Location must be one of: mall, retail, restaurant'),
  
  body('startDate')
    .trim()
    .notEmpty()
    .withMessage('Start date is required')
    .isISO8601()
    .withMessage('Start date must be a valid ISO date string'),
  
  body('endDate')
    .trim()
    .notEmpty()
    .withMessage('End date is required')
    .isISO8601()
    .withMessage('End date must be a valid ISO date string')
    .custom((value, { req }) => {
      if (new Date(value) <= new Date(req.body.startDate)) {
        throw new Error('End date must be after start date');
      }
      return true;
    }),
  
  body('isActive')
    .optional()
    .isBoolean()
    .withMessage('isActive must be a boolean value'),
];

export const updatePromotionValidation = [
  param('id')
    .trim()
    .notEmpty()
    .withMessage('Promotion ID is required')
    .isUUID()
    .withMessage('Invalid promotion ID format'),
  
  body('title')
    .optional()
    .trim()
    .isLength({ min: 3, max: 100 })
    .withMessage('Title must be between 3 and 100 characters'),
  
  body('description')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('Description must not exceed 500 characters'),
  
  body('location')
    .optional()
    .trim()
    .isIn(['mall', 'retail', 'restaurant'])
    .withMessage('Location must be one of: mall, retail, restaurant'),
  
  body('startDate')
    .optional()
    .trim()
    .isISO8601()
    .withMessage('Start date must be a valid ISO date string'),
  
  body('endDate')
    .optional()
    .trim()
    .isISO8601()
    .withMessage('End date must be a valid ISO date string')
    .custom((value, { req }) => {
      if (req.body.startDate && new Date(value) <= new Date(req.body.startDate)) {
        throw new Error('End date must be after start date');
      }
      return true;
    }),
];


export const setActivePromotionValidation = [
  param('id')
    .trim()
    .notEmpty()
    .withMessage('Promotion ID is required')
    .isUUID()
    .withMessage('Invalid promotion ID format'),
  body('isActive')
    .optional()
    .isBoolean()
    .withMessage('isActive must be a boolean value'),
];

export const getPromotionValidation = [
  param('id')
    .trim()
    .notEmpty()
    .withMessage('Promotion ID is required')
    .isUUID()
    .withMessage('Invalid promotion ID format'),
]; 