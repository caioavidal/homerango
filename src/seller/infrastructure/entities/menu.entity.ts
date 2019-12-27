import { Meal } from './meal.entity';
import { Entity, Column } from 'typeorm';

@Entity()
export class Menu {

  @Column()
  seller_id: number;
  
  @Column()
  date:Date;

  @Column(type=> Meal)
  meals: Meal[];
}
