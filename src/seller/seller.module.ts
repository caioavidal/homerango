import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { SellerResolver } from './seller.resolver';


@Module({
  providers: [SellerResolver],
})
export class SellerModule {}
