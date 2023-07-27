import { Item } from "./Item";
import { IHealth } from "./IHealth";

export class BreakableItem extends Item implements IHealth {
  constructor(
    _id: number,
    name: string,
    description: string,
    wearable: boolean,
    weight: number,
    value: number,
    public health: number,
    public durability: number
  ) {
    super(_id, name, description, wearable, weight, value);
  }

  sustainDamage(damage: number): void {
    this.health -= damage;
  }
}
