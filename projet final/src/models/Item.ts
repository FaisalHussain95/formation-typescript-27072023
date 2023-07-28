import IIdentity from "../types/IIdentity";
import GenericId from "./GenericId";

/**
 * Classe abstraite qui permet de créer un objet
 */
interface Item {
  id: GenericId;
  identity: IIdentity;
  weight: number;
  value: number;
}

export default Item;
