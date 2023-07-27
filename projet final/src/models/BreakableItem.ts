import { Item } from "./Item";
import Life from "./Life";
import { GenericId } from "./GenericId";

/**
 * BreakableItem class
 * @name BreakableItem
 */
export class BreakableItem extends Item {
  constructor(
    id: GenericId,
    name: string,
    description: string,
    wearable: boolean,
    weight: number,
    value: number,
    public life: Life
  ) {
    super(id, name, description, wearable, weight, value);
  }
}
