import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id: number;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  price: number;

  @Column('text', { array: true })
  @Field(() => [String])
  dates: string[];

  @Column()
  @Field()
  description: string;

  @Column()
  @Field()
  image: string;

  @Column()
  @Field()
  foodtype: string;
}
