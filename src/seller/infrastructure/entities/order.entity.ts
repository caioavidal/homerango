import { Entity, Column } from "typeorm";

@Entity()
export class Order {
  @Column()
  name: string;

  @Column()
  place: string;

  @Column()
  meal_id: string;
}
