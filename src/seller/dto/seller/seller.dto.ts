
import { ObjectType, Field} from 'type-graphql';

@ObjectType()
export class SellerDto{

    @Field()
    readonly name: string;
}