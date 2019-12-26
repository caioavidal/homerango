import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { SellerModule } from './seller/seller.module';


@Module({
  imports: [
    SellerModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql'
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
