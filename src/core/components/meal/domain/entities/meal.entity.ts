import { Order } from "./order.entity";

export class Meal {
  constructor(
    private readonly name: string,
    private readonly ingredients: string,
    private readonly orders: Array<Order>
  ) {}
}
