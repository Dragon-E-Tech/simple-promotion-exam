import { Router } from 'express';
import { exampleRouter } from './example.routes';

export const router = Router();

// Register routes
router.use('/example', exampleRouter); 