import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RequestInput } from './dto/request.input';
import { RequestEntity } from './entities/requests.entity';

@Injectable()
export class RequestsService {
  constructor(
    @InjectRepository(RequestEntity)
    private requests: Repository<RequestEntity>,
  ) {}

  createProduct(requestDto: RequestInput) {
    this.requests.save(requestDto);
  }

  findAll() {
    return this.requests.find();
  }

  removeById(id: string) {
    return this.requests.delete(id);
  }
}
