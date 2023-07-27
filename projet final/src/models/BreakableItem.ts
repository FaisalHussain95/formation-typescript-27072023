import { Item } from "./Item";

export class BreakableItem extends Item {
  constructor(
    _id: number,
    name: string,
    description: string,
    wearable: boolean,
    weight: number,
    value: number,
    public damage: number,
    public range: number,
    public durability: number
  ) {
    super(_id, name, description, wearable, weight, value);
  }
}
