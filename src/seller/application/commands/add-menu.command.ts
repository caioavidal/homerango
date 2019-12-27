import { AddMenuDto } from '../dto/seller/add-menu.dto';

export class AddMenuCommand {
  constructor(public readonly addMenu: AddMenuDto) {}
}
