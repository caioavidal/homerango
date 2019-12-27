import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { AddMenuCommand } from "./add-menu.command";
import { Seller } from "src/seller/infrastructure/entities/seller.entity";
import { Repository } from "typeorm";

@CommandHandler(AddMenuCommand)
export class AddMenuHandler implements ICommandHandler<AddMenuCommand> {
  constructor(private readonly repository: Repository<Seller>) {}

  async execute(command: AddMenuCommand) {
    const { sellerId, date, meals } = command.addMenu;
    const seller = this.repository.findOne(sellerId);

    seller.

    hero.killEnemy(dragonId);
    await this.repository.persist(hero);
  }
}