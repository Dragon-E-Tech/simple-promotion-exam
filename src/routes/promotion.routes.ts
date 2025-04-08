import { Router } from 'express';
import { PromotionController } from '../controllers/promotion.controller';

const router = Router();
const controller = new PromotionController();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

export const promotionRouter = router; 