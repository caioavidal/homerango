
import { ObjectType, Field} from 'type-graphql';

@ObjectType()
export class MealDto{

    @Field()
    readonly name: string;

    @Field()
    readonly ingredients: string;
}