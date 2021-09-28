import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RequestEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: string;

  @Column()
  comment: string;

  @Column('json')
  product: { id: number; amount: number }[];
}
