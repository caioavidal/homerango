import { Menu } from 'src/seller/domain/entities/menu.entity';

export class AddMenuDto {

  sellerId: number;
  date: Menu['date'];
  meals: Menu['meals'];
}
