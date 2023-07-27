import { Item } from "./Item";

export class Weapon extends Item {
  constructor(
    _id: number,
    name: string,
    description: string,
    wearable: boolean,
    weight: number,
    value: number,
    public damage: number,
    public range: number
  ) {
    super(_id, name, description, wearable, weight, value);
  }
}
