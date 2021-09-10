import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from './orm.config';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), ProductsModule, GraphQLModule.forRoot({
    installSubscriptionHandlers: true,
    autoSchemaFile: 'schema.gql',
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }