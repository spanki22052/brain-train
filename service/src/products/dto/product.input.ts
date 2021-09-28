import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ProductInput {
  @Field()
  title: string;

  @Field()
  price: number;

  @Field(() => [String])
  dates: string[];

  @Field()
  description: string;

  @Field()
  image: string;

  @Field()
  foodtype: string;
}
