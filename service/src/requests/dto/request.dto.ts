import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RequestEntityObj {
  // @Field((type) => ID)
  // id: number;

  @Field()
  amount: number;
}

export class RequestInterface {
  id: number;
  amount: number;
}
