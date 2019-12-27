import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, ObjectIdColumn } from 'typeorm';


@Entity()
export class Meal {
    @PrimaryGeneratedColumn()
    @ObjectIdColumn()
    id: number;

    @Column({ length: 100 })
    name: string;

    @Column({ length: 400 })
    ingredients: string;

    @Column()
    date: Date
    
}