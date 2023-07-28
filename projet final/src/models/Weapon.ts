import Item from "./Item";

/**
 * Classe qui permet de créer une arme
 */
class Weapon extends Item {
  constructor(
    id: number,
    name: string,
    description: string,
    wearable: boolean,
    weight: number,
    value: number,
    public damage: number,
    public range: number
  ) {
    super(id, name, description, wearable, weight, value);
  }
}

export default Weapon;
