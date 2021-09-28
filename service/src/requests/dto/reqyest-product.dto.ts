import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RequestDto {
  @Field()
  productId: string;

  @Field()
  amount: number;
}
