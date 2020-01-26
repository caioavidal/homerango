import { Meal } from './meal.entity';

export class Menu {
  constructor(
    private readonly date: Date,
    private readonly meals: Array<Meal>,
  ) {}
}
