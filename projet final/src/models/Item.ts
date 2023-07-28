import GenericId from "./GenericId";

/**
 * Classe abstraite qui permet de créer un objet
 */
abstract class Item implements GenericId {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public wearable: boolean,
    public weight: number,
    public value: number
  ) {}
}

export default Item;
