# Etape 01 - Refactoring

Vous allez retravailler les classes existances pour voir :
- Si il y a besoin d’interface ou type au lieu de classe ?
- Voir si vous gardez les classes ET vous ajoutez des interfaces

Expliquez vos choix / décisions

# Etape 02 - Amélioration

Créer une nouvelle class qui va gérer les combats : Fighter.
Elle va avoir comme méthode : Start(), qui va démarrer le combat.

1. La classe Fighter, attends en paramètre de Start, des combattants, avec une méthode : attack, et une méthode : defend.

Trouver le moyen de rendre votre code le plus générique possible (interface ?, type ?)

Le combat respecte les règles suivantes :
C’est un combat à mort

Tant que l’un des deux combattants n’est pas morts, on continue à combattre

# Les petits plus

Ajouter un système de random, quand l’un des deux combattants tape.

Pour se faire, vous allez créer un type qui impose la méthode : getPointsAttaque() et retourne un nombre donné.

Et vous créerez un objet qui répond à ce nouveau type.
Vous le passerez à la classe Fighter, en constructeur.