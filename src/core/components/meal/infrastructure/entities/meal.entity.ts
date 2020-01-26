import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ObjectIdColumn,
} from 'typeorm';

@Entity()
export class Meal {
  @PrimaryGeneratedColumn()
  @ObjectIdColumn()
  id: number;

  @Column()
  seller_id: number;

  @Column()
  date: Date;

  @Column()
  name: string;

  @Column()
  ingredients: string[];
}
