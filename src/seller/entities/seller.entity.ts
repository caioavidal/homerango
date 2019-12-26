import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Seller {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    name: string;
    
}