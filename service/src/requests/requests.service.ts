import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RequestDto } from './dto/request.dto';
import { RequestEntity } from './entities/requests.entity';

@Injectable()
export class RequestsService {
  constructor(
    @InjectRepository(RequestEntity)
    private requests: Repository<RequestEntity>,
  ) {}

  createProduct(requestDto: RequestDto) {
    console.log(requestDto);
    this.requests.save(requestDto);
  }
}
