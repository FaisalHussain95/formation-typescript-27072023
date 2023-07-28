import Person from "../Person";
import Life from "../Life";

/**
 * Classe qui permet de créer un Wookiee
 */
class Wookiee extends Person {
  constructor(id: number, name: string) {
    super(id, name, new Life(100));
  }
}

export default Wookiee;
