import { BreakableItem } from "./BreakableItem";
import { Person } from "./Person";
import { Weapon } from "./Weapon";

export interface IHealth {
  health: number;
  sustainDamage(weapon: Weapon): void;
}
