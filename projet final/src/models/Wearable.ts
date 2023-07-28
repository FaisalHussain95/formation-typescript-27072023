import GenericId from "./GenericId";
import Item from "./Item";
import Life from "./Life";
import IEquipment from "../types/IEquipment";
import IIdentity from "../types/IIdentity";

class Wearable implements Item, IEquipment {
  constructor(
    public id: GenericId,
    public identity: IIdentity,
    public life: Life,
    public weight: number,
    public value: number,
    public wearable: boolean
  ) {}
}
