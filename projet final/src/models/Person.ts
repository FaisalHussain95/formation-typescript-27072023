import { GenericId } from "./GenericId";
import { IHealth } from "./IHealth";
import { BreakableItem } from "./BreakableItem";
import { Weapon } from "./Weapon";
import { HandleDamage } from "../utils/HandleDamage";

export class Person extends GenericId implements IHealth {
  public activeWeapon: Weapon | null = null;

  constructor(_id: number, public name: string, public health: number) {
    super(_id);
  }

  attack(target: Person | BreakableItem) {
    if (this.activeWeapon === null) {
      console.log("No weapon equipped");
      return;
    }

    console.log(
      `${this.name} attacks ${target.name} with ${this.activeWeapon.name}`
    );
    target.sustainDamage(this.activeWeapon);
    console.log(`${target.name} health is now ${target.health}`);
  }

  sustainDamage(weapon: Weapon): void {
    HandleDamage.sustainAttack(this, weapon);
  }
}
