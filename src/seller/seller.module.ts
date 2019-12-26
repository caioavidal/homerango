import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { SellerResolver } from './seller.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seller } from './entities/seller.entity';
import { SellerService } from './services/seller.service';

@Module({
  imports: [TypeOrmModule.forFeature([Seller])],
  providers: [SellerResolver, SellerService],
})
export class SellerModule {}
