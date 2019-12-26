import { Resolver, Query, Args, ResolveProperty, Parent } from "@nestjs/graphql";

@Resolver()
export class SellerResolver {
//   constructor(
//     private readonly authorsService: AuthorsService,
//     private readonly postsService: PostsService,
//   ) {}

  @Query(() => String)
  async author(@Args('id') id: number) {
    return 'hello'//await this.authorsService.findOneById(id);
  }

//   @ResolveProperty()
//   async posts(@Parent() author) {
//     const { id } = author;
//     return await this.postsService.findAll({ authorId: id });
//   }
}