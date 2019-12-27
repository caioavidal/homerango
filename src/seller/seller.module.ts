import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { SellerResolver } from './domain/seller.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seller } from './infrastructure/entities/seller.entity';
import { SellerService } from './application/services/seller.service';

@Module({
  imports: [TypeOrmModule.forFeature([Seller])],
  providers: [SellerResolver, SellerService],
})
export class SellerModule {}
