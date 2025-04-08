import { Router } from 'express';
import { promotionRouter } from './promotion.routes';

export const router = Router();

// Register routes
router.use('/promotions', promotionRouter); 