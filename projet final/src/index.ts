/*
Etape 01
  Initialiser le projet “projet final” pour faire du typescript
  Créer la classe Wookiee (id, prenom, points de vie)
  Créer une classe StormTrooper (id, prenom, points de vie)
  Créer une arme (id, libelle, puissance de frappe)

Etape 02
  Aller voir ce que fait extends (héritage)
  Appliquer à vos classes
  Etape 03

  Rajouter la notion d’attaque : Attaquer
  console.log, => “X, j’attaque Y”

Etape 04
  Dans le main.ts, créer un wookiee et un stormtrooper, et fight !
*/

import { Wookiee } from "./models/Wookiee";
import { StormTrooper } from "./models/StormTrooper";
import { Weapon } from "./models/Weapon";

const weapon1 = new Weapon(0, "Blaster", "Blaster", true, 1, 1, 10, 10);
const wookiee = new Wookiee(1, "Chewbacca", 100);
wookiee.activeWeapon = weapon1;
const stormTrooper = new StormTrooper(2, "StormTrooper", 100);

for (let i = 0; i < 10; i++) {
  wookiee.attack(stormTrooper);
  console.log("--");

  if (stormTrooper.health <= 0) {
    break;
  }
}

console.log(stormTrooper.name, "is dead");
console.log("Fin du combat");
