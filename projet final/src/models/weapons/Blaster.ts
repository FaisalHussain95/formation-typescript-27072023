import Weapon from "../Weapon";

class Blaster extends Weapon {
  constructor(id: number) {
    super(id, "Blaster", "Blaster description", true, 1, 1, 10, 10);
  }
}

export default Blaster;
