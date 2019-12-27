import { Resolver, Query, Args, ResolveProperty, Parent, Mutation } from "@nestjs/graphql";
import { SellerService } from "../application/services/seller.service";
import { Seller } from "../infrastructure/entities/seller.entity";
import { SellerDto } from "../application/dto/seller/seller.dto";
import { SellerInput } from "../graphql/inputs/seller.input";

@Resolver()
export class SellerResolver {
  constructor(
    private readonly sellerService: SellerService
  ) {}

//   @Query(() => String)
//   async author(@Args('id') id: number) {
//     return 'hello'//await this.authorsService.findOneById(id);
//   }

  @Query(()=>[SellerDto])
  async sellers() {
    return await this.sellerService.findAll();
  }

  @Mutation(()=>SellerDto)
  async createSeller(@Args('input') input: SellerInput){
    return this.sellerService.create(input);
  }



//   @ResolveProperty()
//   async posts(@Parent() author) {
//     const { id } = author;
//     return await this.postsService.findAll({ authorId: id });
//   }
}