import { GenericId } from "./GenericId";

export class Item extends GenericId {
  constructor(
    _id: number,
    public name: string,
    public description: string,
    public wearable: boolean,
    public weight: number,
    public value: number
  ) {
    super(_id);
  }
}
