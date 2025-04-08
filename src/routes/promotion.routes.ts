import { Router } from 'express';
import { PromotionController } from '../controllers/promotion.controller';
import { validate } from '../middleware/validate';
import {
  createPromotionValidation,
  updatePromotionValidation,
  getPromotionValidation
} from '../validators/promotion.validator';

const router = Router();
const controller = new PromotionController();

router.get('/', controller.getAll);
router.get('/:id', getPromotionValidation, validate, controller.getById);
router.post('/', createPromotionValidation, validate, controller.create);
router.put('/:id', updatePromotionValidation, validate, controller.update);
router.delete('/:id', getPromotionValidation, validate, controller.delete);

export const promotionRouter = router; 