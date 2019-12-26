import { Resolver, Query, Args, ResolveProperty, Parent } from "@nestjs/graphql";
import { SellerService } from "./services/seller.service";
import { Seller } from "./entities/seller.entity";

@Resolver('Seller')
export class SellerResolver {
  constructor(
    private readonly sellerService: SellerService
  ) {}

//   @Query(() => String)
//   async author(@Args('id') id: number) {
//     return 'hello'//await this.authorsService.findOneById(id);
//   }

  @Query()
  async sellers() {
    await this.sellerService.findAll();
  }

//   @ResolveProperty()
//   async posts(@Parent() author) {
//     const { id } = author;
//     return await this.postsService.findAll({ authorId: id });
//   }
}