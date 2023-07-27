import { GenericId } from "./GenericId";
import { BreakableItem } from "./BreakableItem";

export class Person extends GenericId {
  constructor(_id: number, public name: string, public healthPoints: number) {
    super(_id);
  }

  attack(target: Person | BreakableItem) {
    console.log(`${this.name}, j'attaque ${target.id}`);
  }
}
