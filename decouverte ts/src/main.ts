class Personne {
  constructor(public nom: string, public prenom: string) {
    console.log("Personne constructor");
  }
}

const p = new Personne("toto", "titi");
const p2: Personne = {
  nom: "toto",
  prenom: "titi",
};

function aff(p: Personne) {}

aff(p2);

// y = 1; //  error TS2322: Type 'number' is not assignable to type 'Yolo'.
