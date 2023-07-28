import GenericId from "./GenericId";
import Item from "./Item";
import IIdentity from "../types/IIdentity";
import { v4 as uuidv4 } from "uuid";

/**
 * Classe qui permet de créer une arme
 */
class Weapon implements Item {
  public id: GenericId;

  constructor(
    public identity: IIdentity,
    public weight: number,
    public value: number,
    public damage: number,
    public range: number
  ) {
    this.id = {
      id: uuidv4(),
    };
  }
}

export default Weapon;
