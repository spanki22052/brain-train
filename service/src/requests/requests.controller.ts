import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { RequestsService } from './requests.service';

@Controller('requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}

  @Post()
  get(@Body() body) {
    this.requestsService.createProduct(body);
    return 'Sent';
  }

  @Get()
  hello() {
    return this.requestsService.findAll();
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.requestsService.removeById(id);
  }
}
