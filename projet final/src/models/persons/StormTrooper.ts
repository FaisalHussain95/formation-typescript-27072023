import Person from "../Person";
import Life from "../Life";

/**
 * Classe qui permet de créer un StormTrooper
 */
class StormTrooper extends Person {
  constructor(name: string) {
    super(
      {
        name,
        info: "StormTrooper info...",
      },
      new Life(30)
    );
  }
}

export default StormTrooper;
