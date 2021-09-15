import { Field, ID, InputType } from '@nestjs/graphql';
import { PrimaryGeneratedColumn } from 'typeorm';

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
