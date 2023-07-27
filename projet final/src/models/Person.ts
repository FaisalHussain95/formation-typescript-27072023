import { GenericId } from "./GenericId";
import { BreakableItem } from "./BreakableItem";
import { Weapon } from "./Weapon";
import Life from "./Life";

/**
 * Classe qui permet de créer un Personnage
 */
export class Person {
  constructor(
    public id: GenericId,
    public name: string,
    public life: Life,
    private _activeWeapon: Weapon | null = null
  ) {}

  weapon(): Weapon | null {
    return this._activeWeapon;
  }

  equip(weapon: Weapon) {
    this._activeWeapon = weapon;
  }

  attack(target: Person | BreakableItem) {
    if (this._activeWeapon === null) {
      console.log(
        `${this.name} tried to attack ${target.name} but has no weapon`
      );
      console.log(`${target.name} health is ${target.life.value}`);
      return;
    }

    console.log(
      `${this.name} attacks ${target.name} with ${this._activeWeapon.name}`
    );
    target.life.sustainDamage(this._activeWeapon);
    console.log(`${target.name} health is now ${target.life.value}`);
  }
}
