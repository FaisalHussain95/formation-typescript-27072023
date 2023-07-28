import IIdentity from "../types/IIdentity";
import GenericId from "./GenericId";
import Item from "./Item";
import Life from "./Life";
import { v4 as uuidv4 } from "uuid";

/**
 * BreakableItem class
 * @name BreakableItem
 */
class BreakableItem implements Item {
  public id: GenericId;

  constructor(
    public identity: IIdentity,
    public weight: number,
    public value: number,
    public life: Life
  ) {
    this.id = {
      id: uuidv4(),
    };
  }
}

export default BreakableItem;
