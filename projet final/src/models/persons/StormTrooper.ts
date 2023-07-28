import Person from "../Person";
import Life from "../Life";

/**
 * Classe qui permet de créer un StormTrooper
 */
class StormTrooper extends Person {
  constructor(id: number, name: string) {
    super(id, name, new Life(30));
  }
}

export default StormTrooper;
