import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AddMealCommand } from '../add-meal.command';
import { Repository } from 'typeorm';
import { Meal } from 'src/core/components/meal/infrastructure/entities/meal.entity';
import { InjectRepository } from '@nestjs/typeorm';

@CommandHandler(AddMealCommand)
export class AddMealHandler implements ICommandHandler<AddMealCommand> {
  constructor(
    @InjectRepository(Meal)
    private readonly repository: Repository<Meal>,
  ) {}

  async execute(command: AddMealCommand) {
    await this.repository.save({ ...command });
  }
}
