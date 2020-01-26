import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { SellerModule } from './core/components/meal/seller.module';
import { Seller } from './core/components/meal/infrastructure/entities/seller.entity';
import { Meal } from './core/components/meal/infrastructure/entities/meal.entity';


@Module({
  imports: [
    SellerModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql'
    }),
    TypeOrmModule.forRoot(
      {
        type: 'mongodb',
        host: 'localhost',
        port: 27017,
        database: 'homerango',
        entities:[Seller,Meal],
        synchronize: true
      }
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
