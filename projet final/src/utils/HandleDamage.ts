import { Weapon } from "../models/Weapon";
import Life from "../models/Life";

export class HandleDamage {
  static sustainAttack(life: Life, weapon: Weapon) {
    life.value -= weapon.damage;

    // health to zero if negative
    if (life.value <= 0) {
      life.value = 0;
    }
  }
}
