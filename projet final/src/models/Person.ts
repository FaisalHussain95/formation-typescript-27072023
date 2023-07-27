import { GenericId } from "./GenericId";
import { IHealth } from "./IHealth";
import { BreakableItem } from "./BreakableItem";

export class Person extends GenericId implements IHealth {
  constructor(_id: number, public name: string, public health: number) {
    super(_id);
  }

  attack(target: Person | BreakableItem) {
    console.log(`${this.name}, j'attaque ${target.id}`);
  }

  sustainDamage(damage: number): void {
    this.health -= damage;
  }
}
