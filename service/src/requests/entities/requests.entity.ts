import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { RequestEntityObject } from './product-request.entity';

@Entity()
@ObjectType()
export class RequestEntity {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id: number;

  @Column()
  @Field()
  userId: string;

  @Column()
  @Field()
  commentTime: string;

  @Column()
  @Field()
  requestTime: string;

  @Column('json')
  @Field((type) => [RequestEntityObject])
  product: { id: number; amount: number; productId: number }[];

  @Column()
  @Field()
  name: string;
}
