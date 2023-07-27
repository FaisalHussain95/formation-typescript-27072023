import { Weapon } from "../Weapon";
import { GenericId } from "../GenericId";

class Blaster extends Weapon {
  constructor(id: GenericId) {
    super(id, "Blaster", "Blaster description", true, 1, 1, 10, 10);
  }
}

export default Blaster;
