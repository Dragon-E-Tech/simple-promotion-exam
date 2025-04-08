import { Request, Response } from 'express';
import { PromotionService } from '../services/promotion.service';

export class PromotionController {
  private service: PromotionService;

  constructor() {
    this.service = new PromotionService();
  }

  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const promotions = await this.service.getAll();
      res.json(promotions);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    try {
      const promotion = await this.service.getById(req.params.id);
      if (!promotion) {
        res.status(404).json({ error: 'Promotion not found' });
        return;
      }
      res.json(promotion);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const promotion = await this.service.create(req.body);
      res.status(201).json(promotion);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  update = async (req: Request, res: Response): Promise<void> => {
    try {
      const promotion = await this.service.update(req.params.id, req.body);
      if (!promotion) {
        res.status(404).json({ error: 'Promotion not found' });
        return;
      }
      res.json(promotion);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    try {
      const success = await this.service.delete(req.params.id);
      if (!success) {
        res.status(404).json({ error: 'Promotion not found' });
        return;
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
} 