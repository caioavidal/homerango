import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { SellerModule } from './seller/seller.module';
import { Seller } from './seller/infrastructure/entities/seller.entity';


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
        database: 'test',
        entities:[Seller],
        synchronize: true
      }
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
