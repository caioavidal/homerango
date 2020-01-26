import { Menu } from "src/core/components/meal/infrastructure/entities/menu.entity";
import { InputType, Field, ObjectType } from "type-graphql";

@ObjectType()
export class MealDto {

  @Field()
  id:number
  @Field()
  sellerId: number;
  @Field()
  name:string;
  @Field(type=> [String])
  ingredients: string[];
}
