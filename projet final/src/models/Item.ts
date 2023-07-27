import { GenericId } from "./GenericId";

/**
 * Classe abstraite qui permet de créer un objet
 */
export abstract class Item {
  constructor(
    id: GenericId,
    public name: string,
    public description: string,
    public wearable: boolean,
    public weight: number,
    public value: number
  ) {}
}
