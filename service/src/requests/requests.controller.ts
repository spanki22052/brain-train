import { Body, Controller, Get, Post } from '@nestjs/common';
import { RequestDto } from './dto/request.dto';
import { RequestsService } from './requests.service';

@Controller('requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}

  @Post()
  get(@Body() body: RequestDto) {
    this.requestsService.createProduct(body);
    return 'Sent';
  }
}
