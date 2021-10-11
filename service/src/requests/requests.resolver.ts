import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { RequestInput } from './dto/request.input';
import { RequestEntity } from './entities/requests.entity';
import { RequestsService } from './requests.service';

@Resolver((of) => RequestEntity)
export class RequestsResolver {
  constructor(private readonly requestService: RequestsService) {}

  @Query((returns) => [RequestEntity])
  showRequestsList() {
    return this.requestService.findAll();
  }

  @Mutation((returns) => String)
  createRequest(@Args(`request`) request: RequestInput) {
    const newRequest = { ...request };
    const dateTime = new Date().toString().split(' ')[4].split(':');
    newRequest['requestTime'] = `${dateTime[0]}:${dateTime[1]}`;
    this.requestService.createProduct(newRequest);
    return 'Done';
  }

  @Mutation((returns) => String)
  removeRequest(@Args('id') id: string) {
    this.requestService.removeById(id);
    return 'Done';
  }
}
