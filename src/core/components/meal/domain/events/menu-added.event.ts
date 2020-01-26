import {Menu} from '../entities/menu.entity';
export class MenuAddedEvent {
    constructor(
      public readonly Menu: Menu,
    ) {}
  }