import { GenericId } from "../GenericId";
import { Person } from "../Person";
import Life from "../Life";

/**
 * Classe qui permet de créer un Wookiee
 */
export class Wookiee extends Person {
  constructor(id: GenericId, name: string) {
    super(id, name, new Life(100));
  }
}
