import { Router } from 'express';
import { ExampleController } from '../controllers/example.controller';

const router = Router();
const controller = new ExampleController();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

export const exampleRouter = router; 