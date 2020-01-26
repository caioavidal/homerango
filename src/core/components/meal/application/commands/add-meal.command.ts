import { AddMealDto } from '../../../../../adapters/graphql/inputs/add-meal.input';

export class AddMealCommand {
  constructor(
    private readonly sellerId: string,
    private readonly name: string,
    private readonly ingredients: string[],
    private readonly date: Date
  ) {}
}
