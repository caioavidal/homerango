import { Menu } from 'src/core/components/meal/infrastructure/entities/menu.entity';
import { InputType, Field, ID } from 'type-graphql';

@InputType()
export class AddMealDto {
  @Field(type => ID)
  sellerId: string;
  @Field()
  name: string;
  @Field(type => [String])
  ingredients: string[];

  @Field(type => [Date])
  date: Date
}
