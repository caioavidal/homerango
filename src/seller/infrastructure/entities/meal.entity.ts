import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, ObjectIdColumn } from 'typeorm';
import { Order } from './order.entity';


@Entity()
export class Meal {
    @PrimaryGeneratedColumn()
    @ObjectIdColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    ingredients: string[];
}