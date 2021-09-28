import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestEntity } from './entities/requests.entity';
import { RequestsController } from './requests.controller';
import { RequestsResolver } from './requests.resolver';
import { RequestsService } from './requests.service';

@Module({
  imports: [TypeOrmModule.forFeature([RequestEntity])],
  providers: [RequestsResolver, RequestsService],
  controllers: [RequestsController],
})
export class RequestsModule {}
