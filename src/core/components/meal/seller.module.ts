import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { SellerResolver } from '../../../adapters/graphql/seller.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seller } from './infrastructure/entities/seller.entity';
import { SellerService } from './application/services/seller.service';
import { CqrsModule } from '@nestjs/cqrs';
import { AddMealHandler } from './application/commands/handlers/add-meal.handler';

import { Meal } from './infrastructure/entities/meal.entity';

export const CommandHandlers = [AddMealHandler];

@Module({
  imports: [TypeOrmModule.forFeature([Seller, Meal]), CqrsModule],
  providers: [SellerResolver, SellerService, ...CommandHandlers],
})
export class SellerModule {}
