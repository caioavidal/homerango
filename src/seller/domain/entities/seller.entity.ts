import { AggregateRoot } from '@nestjs/cqrs';
import { Menu } from './menu.entity';
import { Meal } from './meal.entity';
import { MenuAddedEvent } from '../events/menu-added.event';
import { Entity } from 'typeorm';

export class Seller extends AggregateRoot {
  constructor(
    private readonly id: string,
    private readonly name: string,
    private readonly menus: Array<Menu>,
  ) {
    super();
  }

  addMenu(date: Date, meals: Array<Meal>) {
    const menu = new Menu(date, meals);
    this.menus.push(menu);
  }
}
