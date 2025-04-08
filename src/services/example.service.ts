import { Example } from '../models/example.model';

export class ExampleService {
  private items: Example[] = [];

  async getAll(): Promise<Example[]> {
    return this.items;
  }

  async getById(id: number): Promise<Example | undefined> {
    return this.items.find(item => item.id === id);
  }

  async create(data: Omit<Example, 'id'>): Promise<Example> {
    const newItem: Example = {
      id: this.items.length + 1,
      ...data
    };
    this.items.push(newItem);
    return newItem;
  }

  async update(id: number, data: Partial<Example>): Promise<Example | undefined> {
    const index = this.items.findIndex(item => item.id === id);
    if (index === -1) return undefined;

    this.items[index] = { ...this.items[index], ...data };
    return this.items[index];
  }

  async delete(id: number): Promise<boolean> {
    const index = this.items.findIndex(item => item.id === id);
    if (index === -1) return false;

    this.items.splice(index, 1);
    return true;
  }
} 