import { GenericId } from "./GenericId";
import { Item } from "./Item";

/**
 * Classe qui permet de créer une arme
 */
export class Weapon extends Item {
  constructor(
    id: GenericId,
    name: string,
    description: string,
    wearable: boolean,
    weight: number,
    value: number,
    public damage: number,
    public range: number
  ) {
    super(id, name, description, wearable, weight, value);
  }
}
