import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, ObjectIdColumn } from 'typeorm';
import { Menu } from './menu.entity';


@Entity()
export class Seller {
    @PrimaryGeneratedColumn()
    @ObjectIdColumn()
    id: number;

    @Column({ length: 100 })
    name: string;
}