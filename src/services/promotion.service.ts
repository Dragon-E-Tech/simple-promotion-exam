import { promotionMock } from "../mocks/promotion.mock";
import { Promotion } from "../models/promotion.model";
import { v4 as uuidv4 } from "uuid";

export class PromotionService {
  private promotions: Promotion[] = [];

  constructor() {
    this.promotions = promotionMock;
  }

  async getAll(): Promise<Promotion[]> {
    return this.promotions;
  }

  async getById(id: string): Promise<Promotion | undefined> {
    return this.promotions.find((promotion) => promotion.id === id);
  }

  async create(
    data: Omit<Promotion, "id" | "createdAt" | "updatedAt">
  ): Promise<Promotion> {
    const now = new Date().toISOString();
    const newPromotion: Promotion = {
      id: uuidv4(),
      ...data,
      isActive: true,
      createdAt: now,
      updatedAt: now,
    };
    this.promotions.push(newPromotion);
    return newPromotion;
  }

  async update(
    id: string,
    data: Partial<Omit<Promotion, "id" | "createdAt" | "updatedAt">>
  ): Promise<Promotion | undefined> {
    const index = this.promotions.findIndex((promotion) => promotion.id === id);
    if (index === -1) return undefined;

    this.promotions[index] = {
      ...this.promotions[index],
      ...data,
      updatedAt: new Date().toISOString(),
    };
    return this.promotions[index];
  }

  async setActive(
    id: string,
    isActive: boolean
  ): Promise<Promotion | undefined> {
    const index = this.promotions.findIndex((promotion) => promotion.id === id);
    if (index === -1) return undefined;

    this.promotions[index].isActive = isActive;
    return this.promotions[index];
  }

  async delete(id: string): Promise<boolean> {
    const index = this.promotions.findIndex((promotion) => promotion.id === id);
    if (index === -1) return false;

    this.promotions.splice(index, 1);
    return true;
  }
}
