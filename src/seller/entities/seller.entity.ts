import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, ObjectIdColumn } from 'typeorm';


@Entity()
export class Seller {
    @PrimaryGeneratedColumn()
    @ObjectIdColumn()
    id: number;

    @Column({ length: 100 })
    name: string;
    
}