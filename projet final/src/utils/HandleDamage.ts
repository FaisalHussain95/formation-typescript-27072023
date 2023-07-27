import { BreakableItem } from "../models/BreakableItem";
import { Person } from "../models/Person";
import { Weapon } from "../models/Weapon";

export class HandleDamage {
  static sustainAttack(target: Person | BreakableItem, weapon: Weapon) {
    target.health -= weapon.damage;

    // health to zero if negative
    if (target.health <= 0) {
      target.health = 0;
    }
  }
}
