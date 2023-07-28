import Item from "./Item";
import Life from "./Life";

/**
 * BreakableItem class
 * @name BreakableItem
 */
class BreakableItem extends Item {
  constructor(
    id: number,
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

export default BreakableItem;
