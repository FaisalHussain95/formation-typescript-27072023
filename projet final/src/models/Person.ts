import GenericId from "./GenericId";
import BreakableItem from "./BreakableItem";
import Weapon from "./Weapon";
import Life from "./Life";
import IIdentity from "../types/IIdentity";
import { v4 as uuidv4 } from "uuid";

/**
 * Classe qui permet de créer un Personnage
 */
class Person {
  public id: GenericId;

  constructor(
    public identity: IIdentity,
    public life: Life,
    private _activeWeapon: Weapon | null = null
  ) {
    this.id = {
      id: uuidv4(),
    };
  }

  weapon(): Weapon | null {
    return this._activeWeapon;
  }

  equip(weapon: Weapon) {
    this._activeWeapon = weapon;
  }

  attack(target: Person | BreakableItem) {
    if (this._activeWeapon === null) {
      console.log(
        `${this.identity.name} tried to attack ${target.identity.name} but has no weapon`
      );
      console.log(`${target.identity.name} health is ${target.life.value}`);
      return;
    }

    console.log(
      `${this.identity.name} attacks ${target.identity.name} with ${this._activeWeapon.identity.name}`
    );
    target.life.sustainDamage(this._activeWeapon);
    console.log(`${target.identity.name} health is now ${target.life.value}`);
  }
}

export default Person;
