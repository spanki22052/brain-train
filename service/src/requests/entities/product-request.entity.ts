import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductRequestEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  productId: string;
}
