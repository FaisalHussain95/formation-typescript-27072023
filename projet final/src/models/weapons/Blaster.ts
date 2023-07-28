import Weapon from "../Weapon";

class Blaster extends Weapon {
  constructor() {
    const weight = 10;
    const value = 10;
    const damage = 10;
    const range = 500;

    super(
      {
        name: "Blaster",
        info: "Blaster info...",
      },
      weight,
      value,
      damage,
      range
    );
  }
}

export default Blaster;
