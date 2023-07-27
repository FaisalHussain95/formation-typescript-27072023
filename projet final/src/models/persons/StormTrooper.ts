import { Person } from "../Person";
import { GenericId } from "../GenericId";
import Life from "../Life";

/**
 * Classe qui permet de créer un StormTrooper
 */
export class StormTrooper extends Person {
  constructor(id: GenericId, name: string) {
    super(id, name, new Life(30));
  }
}
