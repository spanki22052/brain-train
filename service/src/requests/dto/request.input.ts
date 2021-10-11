import { Field, InputType } from '@nestjs/graphql';
import JSON from 'graphql-type-json';

@InputType()
export class RequestInput {
  @Field()
  userId: string;

  @Field()
  comment: string;

  @Field()
  commentTime: string;

  @Field()
  name: string;

  @Field((type) => JSON)
  product: any;
}
