import {
  Resolver,
  Query,
  Args,
  ResolveProperty,
  Parent,
  Mutation,
} from '@nestjs/graphql';
import { SellerService } from '../../core/components/meal/application/services/seller.service';
import { SellerDto } from '../../core/components/meal/application/dto/seller/seller.dto';
import { SellerInput } from './inputs/seller.input';
import { CommandBus } from '@nestjs/cqrs';
import { AddMealDto } from './inputs/add-meal.input';
import { AddMealCommand } from '../../core/components/meal/application/commands/add-meal.command';

@Resolver()
export class SellerResolver {
  constructor(
    private readonly sellerService: SellerService,
    private readonly commandBus: CommandBus,
  ) {}


  @Query(() => [SellerDto])
  async sellers() {
    return await this.sellerService.findAll();
  }

  @Mutation(() => SellerDto)
  async createSeller(@Args('input') input: SellerInput) {
    return this.sellerService.create(input);
  }

  @Mutation(() => Boolean)
  async addMeal(@Args('input') input: AddMealDto) {
    this.commandBus.execute(
      new AddMealCommand(
        input.sellerId,
        input.name,
        input.ingredients,
        input.date,
      ),
    );
    return true;
  }
}
