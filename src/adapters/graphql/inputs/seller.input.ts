
import { Field, InputType} from 'type-graphql';

@InputType()
export class SellerInput{

    @Field()
    readonly name: string;
}