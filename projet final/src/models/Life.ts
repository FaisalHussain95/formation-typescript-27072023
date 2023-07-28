import Weapon from "./Weapon";
import HandleDamage from "../utils/HandleDamage";

/**
 * Life class
 * @name Life
 */
class Life {
  constructor(public value: number) {}

  sustainDamage(weapon: Weapon): void {
    HandleDamage.sustainAttack(this, weapon);
  }
}

export default Life;
