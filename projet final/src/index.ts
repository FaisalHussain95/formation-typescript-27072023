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

import Wookiee from "./models/persons/Wookiee";
import StormTrooper from "./models/persons/StormTrooper";
import Blaster from "./models/weapons/Blaster";
import GenericId from "./models/GenericId";

const blaster1 = new Blaster(10);
const wookiee = new Wookiee(11, "Chewbacca");
wookiee.equip(blaster1);

const stormTrooper = new StormTrooper(12, "StormTrooper");

for (let i = 0; i < 10; i++) {
  wookiee.attack(stormTrooper);
  console.log("--");
  stormTrooper.attack(wookiee);
  console.log("--");

  if (stormTrooper.life.value <= 0 || wookiee.life.value <= 0) {
    break;
  }
}

console.log(stormTrooper.name, "is dead");
console.log("Fin du combat");
