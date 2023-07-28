import Person from "../Person";
import Life from "../Life";

/**
 * Classe qui permet de créer un Wookiee
 */
class Wookiee extends Person {
  constructor(name: string) {
    super(
      {
        name,
        info: "Wookiee info...",
      },
      new Life(100)
    );
  }
}

export default Wookiee;
